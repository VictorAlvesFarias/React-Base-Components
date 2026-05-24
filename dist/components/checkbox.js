import { forwardRef, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/checkbox.tsx
var CheckboxContainer = forwardRef((props, ref) => {
	const internalRef = useRef(null);
	const [checked, setChecked] = useState(false);
	function handleRef(element) {
		internalRef.current = element;
		if (ref instanceof Function) ref(element);
	}
	function handleOnChange(e) {
		if (!props.disabled && (props.value == null || props.value == void 0)) {
			if (!checked) e.target.value = true;
			else e.target.value = false;
			props?.onChange && props.onChange(e, props.data);
			setChecked(!checked);
		} else if (!props.disabled && props.value != null && props.value != void 0) props?.onChange && props.onChange(e, props.data);
	}
	useEffect(() => {
		setChecked(internalRef.current?.value == "true");
	}, [internalRef.current?.value]);
	useEffect(() => {
		setChecked(props.value?.toString() == "true");
	}, [props.value]);
	return /* @__PURE__ */ jsxs("label", {
		"aria-checked": checked,
		className: props.className,
		children: [/* @__PURE__ */ jsx("input", {
			...props,
			children: null,
			className: "hidden",
			ref: handleRef,
			onClick: handleOnChange
		}), checked && props.children]
	});
});
//#endregion
export { CheckboxContainer };
