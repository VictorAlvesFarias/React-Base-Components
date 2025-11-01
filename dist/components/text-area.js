import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { useRef } from "react";
const TextAreaContainer = forwardRef((props, ref) => {
    const internalRef = useRef(null);
    function handleRef(element) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    }
    function handleOnChange(e) {
        e.target.value = props.mask ? e.target.value.replace(/\D/g, '').replace(props.mask[0], props.mask[1]) : e.target.value;
        (props === null || props === void 0 ? void 0 : props.onChange) ? props.onChange(e) : null;
    }
    return (_jsx("div", { onClick: () => { var _a; return (_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, className: props.className, "aria-disabled": props.disabled, "aria-atomic": props.loading, children: _jsx("textarea", { ...props, className: "bg-transparent outline-none w-full h-full resize-none", placeholder: props.placeholder, ref: handleRef, onChange: handleOnChange }) }));
});
export default TextAreaContainer;
