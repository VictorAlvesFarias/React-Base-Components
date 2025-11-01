import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ModalContextObject } from './modal-context';
function ModalOpen(_) {
    const { setOpen } = useContext(ModalContextObject);
    function handleOpen(e) {
        setOpen(true);
        _.callback ? (e) : null;
    }
    return (_jsx("div", { onClick: handleOpen, className: _.className, children: _.children }));
}
export default ModalOpen;
