import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
function AccordionContext(props) {
    const [open, setOpen] = useState(false);
    const context = {
        setOpen: (e) => { setOpen(e); },
        open: open
    };
    return _jsx(AccordionContextObject.Provider, { value: context, children: props.children });
}
const AccordionContextObject = createContext({
    open: false,
    setOpen: () => { }
});
export { AccordionContextObject, AccordionContext };
