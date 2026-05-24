import { DropdownContextObject } from "./dropdown-context.js";
import { forwardRef, useContext, useEffect, useRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var DropdownRootContainer = forwardRef((props, ref) => {
	const { open, setOpen, selected, setSelected, filter, setFilter, setStarted, options } = useContext(DropdownContextObject);
	const internalRef = useRef(null);
	const helperInputRef = useRef(null);
	const inputProps = {
		...props,
		children: null
	};
	function handleRef(element) {
		if (ref instanceof Function) ref(element);
		internalRef.current = element;
	}
	function handleOnChangeFilter(e) {
		setSelected(null);
		setFilter(e.target.value);
		if (internalRef.current?.value) {
			internalRef.current.value = "";
			if (ref instanceof Function) ref(internalRef.current);
		}
	}
	function onClick() {
		setOpen(true);
		helperInputRef.current?.focus();
	}
	useEffect(() => {
		setStarted(inputProps.value?.toString() ?? "");
	}, []);
	useEffect(() => {
		let option = options.find((e) => e.value == internalRef?.current?.value);
		if (option == null) {
			setSelected(null);
			return;
		}
		setSelected({
			label: option?.label ?? "",
			value: option?.value
		});
	}, [internalRef.current?.value]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "lib-w-full lib-relative",
		children: [/* @__PURE__ */ jsxs("div", {
			"aria-disabled": props.disabled,
			className: props.className + " z-[9] relative",
			onClick: props.disabled ? () => null : onClick,
			children: [/* @__PURE__ */ jsx("input", {
				ref: helperInputRef,
				className: "lib-bg-transparent lib-outline-none lib-w-full",
				type: "text",
				disabled: props.disabled,
				onChange: handleOnChangeFilter,
				value: selected?.label ? selected.label : filter,
				placeholder: props.placeholder
			}), /* @__PURE__ */ jsx("input", {
				...inputProps,
				"aria-hidden": props.value && props.value != "" ? true : false,
				className: "lib-bg-transparent lib-outline-none lib-w-0",
				disabled: props.disabled,
				value: inputProps.value || "",
				ref: handleRef,
				onChange: (e) => {
					e.target.value;
					props?.onChange && props.onChange(e);
				}
			})]
		}), /* @__PURE__ */ jsx("div", {
			"aria-hidden": !open,
			className: "lib-absolute lib-w-full lib-h-full aria-hidden:lib-hidden lib-z-[12]",
			children: props.children
		})]
	}), /* @__PURE__ */ jsx("div", {
		"aria-hidden": !open,
		onClick: () => setOpen(!open),
		className: "lib-z-[10] lib-fixed lib-w-full lib-top-0 lib-left-0 lib-h-full aria-hidden:lib-hidden"
	})] });
});
//#endregion
export { DropdownRootContainer };
