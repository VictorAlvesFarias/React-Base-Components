import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { AccordionContextObject } from './accordion-context';
const AccordionContainer = forwardRef((props, ref) => {
    const { open } = useContext(AccordionContextObject);
    const innerRef = useRef(null);
    const [height, setHeight] = useState('0px');
    useEffect(() => {
        if (innerRef.current) {
            if (open) {
                const el = innerRef.current;
                const scrollHeight = el.scrollHeight;
                setHeight(scrollHeight + 'px');
                const timeout = setTimeout(() => setHeight('auto'), 300);
                return () => clearTimeout(timeout);
            }
            else {
                setHeight(innerRef.current.scrollHeight + 'px');
                requestAnimationFrame(() => setHeight('0px'));
            }
        }
    }, [open, props.children]);
    return (_jsx("div", { ref: ref, className: `overflow-hidden transition-all duration-300 ${props.className || ''}`, style: { maxHeight: height }, onClick: props.onClick, children: _jsx("div", { ref: innerRef, className: "flex flex-col gap-3 py-3", children: props.children }) }));
});
export default AccordionContainer;
