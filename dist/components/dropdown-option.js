import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useEffect, useRef } from "react";
import { DropdownContextObject } from "./dropdown-context";
function DropdownOptionContainer(props) {
    const { setOpen, setSelected, selected, setFilter, setOption } = useContext(DropdownContextObject);
    const addedRef = useRef(false);
    function handleSetOption() {
        setSelected(props);
        setFilter("");
        setOpen(false);
    }
    useEffect(() => {
        if (addedRef.current == false) {
            addedRef.current = true;
            setOption({ label: props.label, value: props.value });
        }
        if ((selected === null || selected === void 0 ? void 0 : selected.value) == props.value) {
            setSelected(props);
            setFilter("");
        }
    }, []);
    return (_jsx("span", { onClick: handleSetOption, className: props.className, children: props.label }));
}
export default DropdownOptionContainer;
