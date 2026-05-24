import { AccordionContextObject } from "./accordion-context.js";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/accordion.tsx
var AccordionContainer = forwardRef((props, ref) => {
	const { open } = useContext(AccordionContextObject);
	const innerRef = useRef(null);
	const [height, setHeight] = useState("0px");
	useEffect(() => {
		if (innerRef.current) if (open) {
			const scrollHeight = innerRef.current.scrollHeight;
			setHeight(scrollHeight + "px");
			const timeout = setTimeout(() => setHeight("auto"), 300);
			return () => clearTimeout(timeout);
		} else {
			setHeight(innerRef.current.scrollHeight + "px");
			requestAnimationFrame(() => setHeight("0px"));
		}
	}, [open, props.children]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `lib-overflow-hidden lib-transition-all lib-duration-300 ${props.className || ""}`,
		style: { maxHeight: height },
		onClick: props.onClick,
		children: /* @__PURE__ */ jsx("div", {
			ref: innerRef,
			className: "lib-flex lib-flex-col lib-gap-3 lib-py-3",
			children: props.children
		})
	});
});
//#endregion
export { AccordionContainer };
