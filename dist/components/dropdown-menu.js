import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useEffect } from "react";
import { DropdownContextObject } from "./dropdown-context";
;
function DropdownMenuContainer(props) {
    const { filter, started, setSelected } = useContext(DropdownContextObject);
    const items = Array.isArray(props.children) ? props.children : [props.children];
    useEffect(() => {
        if (started != null) {
            setSelected({ value: started, label: items.filter(e => e.props.value == started)[0].props.label });
        }
    }, [started]);
    return (_jsx("div", { className: 'w-full flex flex-col ' + props.className, children: items.filter(e => e.props.label.toLowerCase().includes(filter.toLowerCase())).map(e => e) }));
}
export default DropdownMenuContainer;
