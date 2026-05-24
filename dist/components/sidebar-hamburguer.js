import { SidebarContextObject as e } from "./sidebar-context.js";
import { useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/sidebar-hamburguer.tsx
function r(r) {
	let { setOpen: i, open: a } = t(e);
	return /* @__PURE__ */ n("div", {
		onClick: () => i(!a),
		className: r.className,
		children: r.children
	});
}
//#endregion
export { r as SidebarHamburguerContainer };
