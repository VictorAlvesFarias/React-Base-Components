import { AccordionContextObject } from "./accordion-context.js";
import { forwardRef, useContext, useLayoutEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/accordion.tsx
var AccordionContainer = forwardRef((props, ref) => {
	const { open } = useContext(AccordionContextObject);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);
	useLayoutEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		if (open) {
			setHeight(el.scrollHeight);
			const handleTransitionEnd = () => {
				setHeight("auto");
			};
			el.addEventListener("transitionend", handleTransitionEnd, { once: true });
			return () => {
				el.removeEventListener("transitionend", handleTransitionEnd);
			};
		}
		if (height === "auto") {
			setHeight(el.scrollHeight);
			requestAnimationFrame(() => {
				setHeight(0);
			});
		} else setHeight(0);
	}, [open]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		style: { height: height === "auto" ? "auto" : `${height}px` },
		className: `lib-overflow-hidden lib-transition-all lib-duration-300 ${props.className || ""}`,
		children: props.children
	});
});
//#endregion
export { AccordionContainer };
