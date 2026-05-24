import { createContext, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/sidebar-context.tsx
var SidebarContextObject = createContext({
	open: true,
	setOpen: () => {},
	selected: ""
});
function SidebarContext(props) {
	const [open, setOpen] = useState(false);
	const context = {
		open,
		setOpen: (e) => {
			setOpen(e);
		},
		selected: props.getPathname?.() ?? ""
	};
	return /* @__PURE__ */ jsx(SidebarContextObject.Provider, {
		value: context,
		children: props.children
	});
}
//#endregion
export { SidebarContext, SidebarContextObject };
