import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const SidebarContextObject = createContext({
    open: true,
    setOpen: () => { },
    selected: ""
});
function SidebarContext(props) {
    var _a, _b;
    const [open, setOpen] = useState(false);
    const pathname = (_b = (_a = props.getPathname) === null || _a === void 0 ? void 0 : _a.call(props)) !== null && _b !== void 0 ? _b : "";
    const context = {
        open: open,
        setOpen: (e) => { setOpen(e); },
        selected: pathname
    };
    return _jsx(SidebarContextObject.Provider, { value: context, children: props.children });
}
export default SidebarContext;
export { SidebarContextObject };
