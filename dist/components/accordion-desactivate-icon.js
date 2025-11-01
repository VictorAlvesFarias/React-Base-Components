import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { AccordionContextObject } from "./accordion-context";
function AccordionDesactivateIcon(props) {
    const { open } = useContext(AccordionContextObject);
    return (!open &&
        _jsx(_Fragment, { children: props.children }));
}
export default AccordionDesactivateIcon;
