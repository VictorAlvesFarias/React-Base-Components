import { forwardRef, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/form.tsx
var FormContainer = forwardRef((props, ref) => {
	const internalRef = useRef(null);
	function handleRef(element) {
		internalRef.current = element;
		if (ref instanceof Function) ref(element);
	}
	function handleOnSubmit(event) {
		event.preventDefault();
		if (props.onSubmit) props.onSubmit(event);
	}
	return /* @__PURE__ */ jsx("form", {
		ref: handleRef,
		id: props.id,
		className: props.className,
		onSubmit: handleOnSubmit,
		children: props.children
	});
});
//#endregion
export { FormContainer };
