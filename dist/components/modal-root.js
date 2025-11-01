import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ModalContextObject } from './modal-context';
function ModalRootContainer(_) {
    const { open } = useContext(ModalContextObject);
    return (open &&
        _jsx("div", { "aria-checked": open, className: _.className + ' z-50 w-full top-0 left-0 h-screen fixed flex', children: _.children }));
}
export default ModalRootContainer;
