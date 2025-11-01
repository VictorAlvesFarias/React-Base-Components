import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useContext, useEffect, useRef } from "react";
import { DropdownContextObject } from "./dropdown-context";
;
const DropdownRootContainer = forwardRef((props, ref) => {
    var _a;
    const { open, setOpen, selected, setSelected, filter, setFilter, setStarted, options } = useContext(DropdownContextObject);
    const internalRef = useRef(null);
    const helperInputRef = useRef(null);
    const inputProps = { ...props, children: null };
    function handleRef(element) {
        if (ref instanceof Function) {
            ref(element);
        }
        internalRef.current = element;
    }
    ;
    function handleOnChangeFilter(e) {
        var _a;
        setSelected(null);
        setFilter(e.target.value);
        if ((_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.value) {
            internalRef.current.value = "";
            if (ref instanceof Function) {
                ref(internalRef.current);
            }
        }
        ;
    }
    function onClick() {
        var _a;
        setOpen(true);
        (_a = helperInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
    useEffect(() => {
        setStarted(inputProps.value);
    }, []);
    useEffect(() => {
        var _a;
        let option = options.find(e => { var _a; return e.value == ((_a = internalRef === null || internalRef === void 0 ? void 0 : internalRef.current) === null || _a === void 0 ? void 0 : _a.value); });
        if (option == null) {
            setSelected(null);
            return;
        }
        setSelected({ label: (_a = option === null || option === void 0 ? void 0 : option.label) !== null && _a !== void 0 ? _a : "", value: option === null || option === void 0 ? void 0 : option.value });
    }, [(_a = internalRef.current) === null || _a === void 0 ? void 0 : _a.value]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: 'w-full relative', children: [_jsxs("div", { "aria-disabled": props.disabled, className: props.className + " z-[9] relative", onClick: props.disabled ? () => null : onClick, children: [_jsx("input", { ref: helperInputRef, className: "bg-transparent outline-none w-full ", type: "text", disabled: props.disabled, onChange: handleOnChangeFilter, value: (selected === null || selected === void 0 ? void 0 : selected.label) ? selected.label : filter, placeholder: props.placeholder }), _jsx("input", { ...inputProps, "aria-hidden": props.value && props.value != "" ? true : false, className: 'bg-transparent outline-none w-0', disabled: props.disabled, value: inputProps.value || '', ref: handleRef, onChange: (e) => {
                                    e.target.value;
                                    (props === null || props === void 0 ? void 0 : props.onChange) ? props.onChange(e) : null;
                                } })] }), _jsx("div", { "aria-hidden": !open, className: 'absolute w-full h-full aria-hidden:hidden z-[12] ', children: props.children })] }), _jsx("div", { "aria-hidden": !open, onClick: () => setOpen(!open), className: 'z-[10] fixed w-full top-0 left-0 h-full aria-hidden:hidden' })] }));
});
export default DropdownRootContainer;
