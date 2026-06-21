import { AccordionContextObject } from "./accordion.js";
import { createContext, useContext, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/sidebar.tsx
var SidebarContextObject = createContext({
	open: true,
	setOpen: () => {},
	selected: ""
});
function SidebarContext({ children, getPathname }) {
	const [open, setOpen] = useState(false);
	const selected = getPathname?.() ?? "";
	return /* @__PURE__ */ jsx(SidebarContextObject.Provider, {
		value: {
			open,
			setOpen,
			selected
		},
		children
	});
}
function SidebarHamburguerContainer({ className, children }) {
	const { open, setOpen } = useContext(SidebarContextObject);
	return /* @__PURE__ */ jsx("div", {
		onClick: () => setOpen(!open),
		className,
		children
	});
}
function SidebarItemContainer(props) {
	const { selected } = useContext(SidebarContextObject);
	const { open, setOpen } = useContext(AccordionContextObject);
	function handleIsSelected() {
		if (props.href) return !props.unselectable && !!selected?.includes(props.href);
		if (props.commons && selected) return props.commons.some((path) => selected.includes(path));
		return false;
	}
	function handleClick(e) {
		props.onClick?.(e);
		if (props.redirect) props.redirect(props.href ?? "");
	}
	if (props.disable) return /* @__PURE__ */ jsx("div", {
		"aria-selected": handleIsSelected(),
		"aria-checked": open && props.menu === true,
		className: props.className,
		children: props.children
	});
	return /* @__PURE__ */ jsx("div", {
		onClick: handleClick,
		"aria-selected": handleIsSelected(),
		"aria-checked": open,
		className: props.className,
		children: props.children
	});
}
function MenuContainer({ className, children }) {
	const { open, setOpen } = useContext(SidebarContextObject);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			"aria-checked": open,
			className: `md:lib-flex lib-hidden lib-overflow-y-auto ${className ?? ""}`,
			children
		}),
		/* @__PURE__ */ jsxs("div", {
			"aria-checked": open,
			className: "md:lib-hidden lib-fixed lib-z-50 lib-w-full lib-flex lib-top-0 lib-h-screen lib-transition-all lib-duration-500 aria-checked:lib-right-0 lib-right-full",
			children: [/* @__PURE__ */ jsx("div", {
				className: `lib-flex lib-overflow-y-auto md:lib-hidden ${className ?? ""}`,
				role: "dialog",
				"aria-modal": "true",
				children
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
export { MenuContainer, SidebarContext, SidebarContextObject, SidebarHamburguerContainer, SidebarItemContainer };
