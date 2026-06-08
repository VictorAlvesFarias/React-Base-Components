import { AccordionContextObject } from "./accordion-context.js";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/accordion.tsx
var AccordionContainer = forwardRef((props, ref) => {
	const { open } = useContext(AccordionContextObject);
	const [height, setHeight] = useState("0px");
	const contentRef = useRef(null);
	function handleRef(element) {
		if (ref instanceof Function) ref(element);
		else if (ref) ref.current = element;
		contentRef.current = element;
	}
	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;
		if (open) {
			setHeight(el.scrollHeight + "px");
			const timeout = setTimeout(() => setHeight("auto"), 300);
			return () => clearTimeout(timeout);
		} else {
			setHeight(el.scrollHeight + "px");
			requestAnimationFrame(() => setHeight("0px"));
		}
	}, [open, props.children]);
	return /* @__PURE__ */ jsx("div", {
		ref: handleRef,
		className: `lib-overflow-hidden lib-transition-all lib-duration-300 ${props.className || ""}`,
		style: { height },
		...props,
		children: props.children
	});
});
//#endregion
export { AccordionContainer };
