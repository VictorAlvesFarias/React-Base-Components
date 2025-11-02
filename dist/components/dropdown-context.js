import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
function DropdownContext(props) {
    const [open, setOpen] = useState(false);
    const [started, setStarted] = useState(null);
    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState("");
    const [options, setOption] = useState([]);
    function handleAddOption(item) {
        setOption(e => [...e, item]);
    }
    function handleSetSelected(e) {
        (props === null || props === void 0 ? void 0 : props.onChange) ? props.onChange(e === null || e === void 0 ? void 0 : e.value) : null;
        setSelected(e);
    }
    const context = {
        setOpen: setOpen,
        open: open,
        setSelected: handleSetSelected,
        selected: selected,
        filter: filter,
        setFilter: setFilter,
        started,
        setStarted,
        setOption: handleAddOption,
        options
    };
    return _jsx(DropdownContextObject.Provider, { value: context, children: props.children });
}
const DropdownContextObject = createContext({
    open: false,
    setOpen: () => { },
    setSelected: () => { },
    setStarted: () => { },
    setFilter: () => { },
    setOption: () => { },
    selected: null,
    filter: "",
    started: null,
    options: []
});
export { DropdownContextObject, DropdownContext };
