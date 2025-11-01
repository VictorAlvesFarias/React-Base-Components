import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { SidebarContextObject } from "./sidebar-context";
function SidebarHamburguerContainer(props) {
    const { setOpen, open } = useContext(SidebarContextObject);
    return (_jsx("div", { onClick: () => setOpen(!open), className: props.className, children: props.children }));
}
export { SidebarHamburguerContainer };
