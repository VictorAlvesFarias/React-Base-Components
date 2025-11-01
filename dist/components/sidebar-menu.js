import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { SidebarContextObject } from "./sidebar-context";
function MenuContainer(props) {
    const { open, setOpen } = useContext(SidebarContextObject);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'md:flex hidden overflow-y-auto ' + props.className, children: props.children }), _jsxs("div", { className: `md:hidden fixed   z-50 w-full flex top-0 h-screen transition-all duration-500 ${open ? "right-0" : "right-full"}`, children: [_jsx("div", { className: 'flex overflow-y-auto md:hidden ' + props.className, role: "dialog", "aria-modal": "true", children: props.children }), _jsx("div", { className: 'flex-1 pr-12 w-full h-full ', onClick: () => setOpen(false) })] }), _jsx("div", { className: 'flex-1 pr-12 z-40 fixed flex md:hidden  top-0 h-full w-full transition-all ' + (open ? "right-0 delay-0" : "right-full delay-500 "), children: _jsx("div", { className: 'flex-1 pr-12  fixed blur-sm h-full w-full bg-black transition-all duration-500 ' + (open ? "bg-opacity-30" : "bg-opacity-0") }) })] }));
}
export default MenuContainer;
