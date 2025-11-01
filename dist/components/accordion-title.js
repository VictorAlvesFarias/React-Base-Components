import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useContext } from 'react';
import { AccordionContextObject } from './accordion-context';
const AccordionTitleContainer = forwardRef((_, ref) => {
    const { open, setOpen } = useContext(AccordionContextObject);
    function handleOpenAccordionTitle(e) {
        setOpen(!open);
        _.onClick ? _.onClick(e) : null;
    }
    return (_jsx("div", { ref: ref, className: _.className, onClick: handleOpenAccordionTitle, children: _.children }));
});
export default AccordionTitleContainer;
