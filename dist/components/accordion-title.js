import { AccordionContextObject as e } from "./accordion-context.js";
import { forwardRef as t, useContext as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/accordion-title.tsx
var i = t((t, i) => {
	let { open: a, setOpen: o } = n(e);
	function s(e) {
		o(!a), t.onClick && t.onClick(e);
	}
	return /* @__PURE__ */ r("div", {
		ref: i,
		className: t.className,
		onClick: s,
		children: t.children
	});
});
//#endregion
export { i as AccordionTitleContainer };
