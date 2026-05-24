import { SidebarContextObject } from "./sidebar-context.js";
import { useContext } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/sidebar-menu.tsx
function MenuContainer(props) {
	const { open, setOpen } = useContext(SidebarContextObject);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			"aria-checked": open,
			className: "md:flex hidden overflow-y-auto " + props.className,
			children: props.children
		}),
		/* @__PURE__ */ jsxs("div", {
			"aria-checked": open,
			className: `md:lib-hidden lib-fixed lib-z-50 lib-w-full lib-flex lib-top-0 lib-h-screen lib-transition-all lib-duration-500 aria-checked:lib-right-0 lib-right-full`,
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex overflow-y-auto md:hidden " + props.className,
				role: "dialog",
				"aria-modal": "true",
				children: props.children
			}), /* @__PURE__ */ jsx("div", {
				className: "lib-flex-1 lib-pr-12 lib-w-full lib-h-full",
				onClick: () => setOpen(false)
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			"aria-checked": open,
			className: "lib-flex-1 lib-pr-12 lib-z-40 lib-fixed lib-flex md:lib-hidden lib-top-0 lib-h-full lib-w-full aria-checked:lib-delay-0 lib-delay-500 aria-checked:lib-right-0 lib-right-full",
			children: /* @__PURE__ */ jsx("div", {
				"aria-checked": open,
				className: "lib-flex-1 lib-pr-12 lib-fixed lib-blur-sm lib-h-full lib-w-full lib-bg-black lib-transition-all lib-duration-500 aria-checked:lib-bg-opacity-30 lib-bg-opacity-0"
			})
		})
	] });
}
//#endregion
export { MenuContainer };
