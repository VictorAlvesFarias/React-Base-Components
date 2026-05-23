import { createContext as e, useState as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/accordion-context.tsx
function r(e) {
	let [r, a] = t(!1), o = {
		setOpen: (e) => {
			a(e);
		},
		open: r
	};
	return /* @__PURE__ */ n(i.Provider, {
		value: o,
		children: e.children
	});
}
var i = e({
	open: !1,
	setOpen: () => {}
});
//#endregion
export { r as AccordionContext, i as AccordionContextObject };
