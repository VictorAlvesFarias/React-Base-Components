import { forwardRef, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/text-area.tsx
var TextAreaContainer = forwardRef((props, ref) => {
	const internalRef = useRef(null);
	function handleRef(element) {
		internalRef.current = element;
		if (ref instanceof Function) ref(element);
	}
	function handleOnChange(e) {
		e.target.value = props.mask ? e.target.value.replace(/\D/g, "").replace(props.mask[0], props.mask[1]) : e.target.value;
		props?.onChange && props.onChange(e);
	}
	return /* @__PURE__ */ jsx("div", {
		onClick: () => internalRef.current?.focus(),
		className: props.className,
		"aria-disabled": props.disabled,
		"aria-atomic": props.loading,
		children: /* @__PURE__ */ jsx("textarea", {
			...props,
			className: "lib-bg-transparent lib-outline-none lib-w-full lib-h-full lib-resize-none",
			placeholder: props.placeholder,
			ref: handleRef,
			onChange: handleOnChange
		})
	});
});
//#endregion
export { TextAreaContainer };
