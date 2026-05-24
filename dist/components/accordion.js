import { AccordionContextObject as e } from "./accordion-context.js";
import { forwardRef as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/accordion.tsx
var s = t((t, s) => {
	let { open: c } = n(e), l = i(null), [u, d] = a("0px");
	return r(() => {
		if (l.current) if (c) {
			let e = l.current.scrollHeight;
			d(e + "px");
			let t = setTimeout(() => d("auto"), 300);
			return () => clearTimeout(t);
		} else d(l.current.scrollHeight + "px"), requestAnimationFrame(() => d("0px"));
	}, [c, t.children]), /* @__PURE__ */ o("div", {
		ref: s,
		className: `overflow-hidden transition-all duration-300 ${t.className || ""}`,
		style: { maxHeight: u },
		onClick: t.onClick,
		children: /* @__PURE__ */ o("div", {
			ref: l,
			className: "flex flex-col gap-3 py-3",
			children: t.children
		})
	});
});
//#endregion
export { s as AccordionContainer };
