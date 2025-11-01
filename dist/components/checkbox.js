import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useRef, useState } from "react";
const CheckboxContainer = forwardRef((props, ref) => {
    var _a;
    const internalRef = useRef(null);
    const [checked, setChecked] = useState(false);
    function handleRef(element) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    }
    ;
    function handleOnChange(e) {
        if (!props.disabled && (props.value == null || props.value == undefined)) {
            if (!checked) {
                e.target.value = true;
            }
            else {
                e.target.value = false;
            }
            (props === null || props === void 0 ? void 0 : props.onChange) ? props.onChange(e, props.data) : null;
            setChecked(!checked);
        }
        else if (!props.disabled && (props.value != null && props.value != undefined)) {
            (props === null || props === void 0 ? void 0 : props.onChange) ? props.onChange(e, props.data) : null;
        }
    }
    useEffect(() => {
        var _a;
        setChecked(((_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.value) == "true");
    }, [(_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.value]);
    useEffect(() => {
        setChecked(props.value);
    }, [props.value]);
    return (_jsxs("label", { "aria-checked": checked, className: props.className, children: [_jsx("input", { ...props, children: null, className: 'hidden', ref: handleRef, onClick: handleOnChange }), checked && props.children] }));
});
export default CheckboxContainer;
