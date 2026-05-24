import { AccordionContextObject } from "./accordion-context.js";
import { SidebarContextObject } from "./sidebar-context.js";
import { useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/sidebar-item.tsx
function SidebarSidebarItemContainerContainer(props) {
	const { selected } = useContext(SidebarContextObject);
	const { open, setOpen } = useContext(AccordionContextObject);
	function handleIsSelected() {
		let result = false;
		if (props.href) {
			if (!props.unselectable && selected?.includes(props.href)) result = true;
		} else if (props.commons && selected) {
			for (let i = 0; i < props.commons.length; i++) if (selected?.includes(props.commons[i])) {
				result = true;
				break;
			}
		}
		return result;
	}
	function handleOnCLick(e) {
		if (props.onClick) props.onClick(e);
		if (props.redirect) props.redirect(props.href ?? "");
	}
	return !props.disable ? /* @__PURE__ */ jsx("div", {
		onClick: handleOnCLick,
		"aria-selected": handleIsSelected(),
		"aria-checked": open,
		className: props.className,
		children: props.children
	}) : /* @__PURE__ */ jsx("div", {
		"aria-selected": handleIsSelected(),
		onClick: props.onClick,
		"aria-checked": open && props.menu == true,
		className: props.className,
		children: props.children
	});
}
//#endregion
export { SidebarSidebarItemContainerContainer };
