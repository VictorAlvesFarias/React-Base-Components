import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle } from "react";
import { createContext, useState as useStateReact } from "react";
const ModalContext = forwardRef((props, ref) => {
    const [open, setOpen] = useStateReact(props.initialOpen || false);
    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(!open),
        isOpen: () => open
    }));
    const context = {
        setOpen: (e) => { setOpen(e); },
        open: open
    };
    return _jsx(ModalContextObject.Provider, { value: context, children: props.children });
});
ModalContext.displayName = 'ModalContext';
const ModalContextObject = createContext({
    open: false,
    setOpen: () => { }
});
export default ModalContext;
export { ModalContextObject, ModalContext };
