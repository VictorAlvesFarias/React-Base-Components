import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ModalContextObject } from './modal-context';
function ModalClose(props) {
    const { setOpen } = useContext(ModalContextObject);
    function handleOpen(e) {
        setOpen(false);
        props.callback ? props.callback(e) : null;
    }
    return (_jsx("div", { onClick: handleOpen, className: props.className, children: props.children }));
}
export default ModalClose;
