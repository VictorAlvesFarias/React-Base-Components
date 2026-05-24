import { createContext as e, useState as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/sidebar-context.tsx
var r = e({
	open: !0,
	setOpen: () => {},
	selected: ""
});
function i(e) {
	let [i, a] = t(!1), o = {
		open: i,
		setOpen: (e) => {
			a(e);
		},
		selected: e.getPathname?.() ?? ""
	};
	return /* @__PURE__ */ n(r.Provider, {
		value: o,
		children: e.children
	});
}
//#endregion
export { i as SidebarContext, r as SidebarContextObject };
