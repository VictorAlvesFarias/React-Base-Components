import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from 'react';
const FormContainer = forwardRef((props, ref) => {
    const internalRef = useRef(null);
    function handleRef(element) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    }
    ;
    function handleOnSubmit(event) {
        event.preventDefault();
        if (props.onSubmit) {
            props.onSubmit(event);
        }
    }
    return (_jsx("form", { ref: handleRef, id: props.id, className: props.className, onSubmit: handleOnSubmit, children: props.children }));
});
export default FormContainer;
