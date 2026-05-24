import { SidebarContextObject as e } from "./sidebar-context.js";
import { useContext as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/sidebar-menu.tsx
function a(a) {
	let { open: o, setOpen: s } = t(e);
	return /* @__PURE__ */ i(n, { children: [
		/* @__PURE__ */ r("div", {
			"aria-checked": o,
			className: "md:flex hidden overflow-y-auto " + a.className,
			children: a.children
		}),
		/* @__PURE__ */ i("div", {
			"aria-checked": o,
			className: "md:hidden fixed z-50 w-full flex top-0 h-screen transition-all duration-500 aria-checked:right-0 right-full",
			children: [/* @__PURE__ */ r("div", {
				className: "flex overflow-y-auto md:hidden " + a.className,
				role: "dialog",
				"aria-modal": "true",
				children: a.children
			}), /* @__PURE__ */ r("div", {
				className: "flex-1 pr-12 w-full h-full ",
				onClick: () => s(!1)
			})]
		}),
		/* @__PURE__ */ r("div", {
			"aria-checked": o,
			className: "flex-1 pr-12 z-40 fixed flex md:hidden top-0 h-full w-full aria-checked:delay-0 delay-500 aria-checked:right-0 right-full",
			children: /* @__PURE__ */ r("div", {
				"aria-checked": o,
				className: "flex-1 pr-12  fixed blur-sm h-full w-full bg-black transition-all duration-500 aria-checked:bg-opacity-30 bg-opacity-0"
			})
		})
	] });
}
//#endregion
export { a as MenuContainer };
