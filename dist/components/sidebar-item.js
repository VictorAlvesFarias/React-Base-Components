import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { SidebarContextObject } from "./sidebar-context";
import { AccordionContextObject } from "./accordion-context";
function SidebarSidebarItemContainerContainer(props) {
    const { selected } = useContext(SidebarContextObject);
    const { open, setOpen } = useContext(AccordionContextObject);
    function handleIsSelected() {
        let result = false;
        if (props.href) {
            if (!props.unselectable && (selected === null || selected === void 0 ? void 0 : selected.includes(props.href))) {
                result = true;
            }
        }
        else {
            if (props.commons && selected) {
                for (let i = 0; i < props.commons.length; i++) {
                    if (selected === null || selected === void 0 ? void 0 : selected.includes(props.commons[i])) {
                        result = true;
                        break;
                    }
                }
            }
        }
        return result;
    }
    function handleOnCLick(e) {
        var _a;
        if (props.onClick) {
            props.onClick(e);
        }
        if (props.redirect) {
            const path = props.redirect((_a = props.href) !== null && _a !== void 0 ? _a : "");
        }
    }
    return (!props.disable ?
        _jsx("div", { onClick: handleOnCLick, "aria-selected": handleIsSelected(), "aria-checked": open, className: props.className, children: props.children }) :
        _jsx("div", { "aria-selected": handleIsSelected(), onClick: props.onClick, "aria-checked": open && props.menu == true, className: props.className, children: props.children }));
}
export default SidebarSidebarItemContainerContainer;
