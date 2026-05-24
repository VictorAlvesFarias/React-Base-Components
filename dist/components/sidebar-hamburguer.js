import { SidebarContextObject } from "./sidebar-context.js";
import { useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/sidebar-hamburguer.tsx
function SidebarHamburguerContainer(props) {
	const { setOpen, open } = useContext(SidebarContextObject);
	return /* @__PURE__ */ jsx("div", {
		onClick: () => setOpen(!open),
		className: props.className,
		children: props.children
	});
}
//#endregion
export { SidebarHamburguerContainer };
