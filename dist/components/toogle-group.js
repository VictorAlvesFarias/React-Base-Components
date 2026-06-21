import { createContext, forwardRef, useContext, useImperativeHandle, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/toogle-group.tsx
var ToggleGroupContextObject = createContext({
	value: null,
	setValue: () => {}
});
var ToggleGroupContext = forwardRef(({ children, value: initialValue = null, onChange }, ref) => {
	const [value, setValue] = useState(initialValue ?? null);
	function handleSetValue(next) {
		setValue(next);
		onChange?.(next);
	}
	useImperativeHandle(ref, () => ({
		getValue: () => value,
		setValue: handleSetValue,
		clear: () => setValue(null)
	}));
	return /* @__PURE__ */ jsx(ToggleGroupContextObject.Provider, {
		value: {
			value,
			setValue: handleSetValue
		},
		children
	});
});
ToggleGroupContext.displayName = "ToggleGroupContext";
var ToggleGroupItem = forwardRef((props, ref) => {
	const { value: activeValue, setValue } = useContext(ToggleGroupContextObject);
	const isActive = activeValue === props.value;
	function handleClick(e) {
		setValue(props.value);
		props.onClick?.(e);
	}
	return /* @__PURE__ */ jsx("button", {
		ref,
		type: "button",
		"aria-pressed": isActive,
		...props,
		onClick: handleClick,
		children: props.children
	});
});
ToggleGroupItem.displayName = "ToggleGroupItem";
//#endregion
export { ToggleGroupContext, ToggleGroupItem };
