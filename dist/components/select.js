import { createContext, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/select.tsx
var SelectContextObject = createContext({
	open: false,
	setOpen: () => {},
	filter: "",
	setFilter: () => {},
	selected: null,
	setSelected: () => {},
	options: [],
	setOption: () => {},
	externalValue: null,
	setExternalValue: () => {}
});
var SelectRootContainer = forwardRef((props, ref) => {
	const { open, setOpen, selected, setSelected, filter, setFilter, setExternalValue } = useContext(SelectContextObject);
	const internalRef = useRef(null);
	const helperInputRef = useRef(null);
	const { children, ...inputProps } = props;
	function handleRef(element) {
		if (typeof ref === "function") ref(element);
		else if (ref) ref.current = element;
		internalRef.current = element;
	}
	function handleOnChangeFilter(e) {
		setSelected(null);
		setFilter(e.target.value);
		if (internalRef.current) {
			internalRef.current.value = "";
			if (typeof ref === "function") ref(internalRef.current);
		}
	}
	function handleClick() {
		setOpen(true);
		helperInputRef.current?.focus();
	}
	useEffect(() => {
		setExternalValue(inputProps.value ?? null);
	}, [inputProps.value]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "lib-w-full lib-relative",
		children: [/* @__PURE__ */ jsxs("div", {
			"aria-disabled": props.disabled,
			className: `${props.className ?? ""} lib-z-[9] lib-relative`,
			onClick: props.disabled ? void 0 : handleClick,
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
				"aria-hidden": !!inputProps.value && inputProps.value !== "",
				className: "lib-bg-transparent lib-outline-none lib-w-0",
				disabled: props.disabled,
				value: inputProps.value ?? "",
				ref: handleRef,
				onChange: (e) => inputProps.onChange?.(e)
			})]
		}), /* @__PURE__ */ jsx("div", {
			"aria-hidden": !open,
			className: "lib-absolute lib-w-full lib-h-full aria-hidden:lib-hidden lib-z-[12]",
			children
		})]
	}), /* @__PURE__ */ jsx("div", {
		"aria-hidden": !open,
		onClick: () => setOpen(!open),
		className: "lib-z-[10] lib-fixed lib-w-full lib-top-0 lib-left-0 lib-h-full aria-hidden:lib-hidden"
	})] });
});
function SelectContext({ children, onChange }) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const [filter, setFilter] = useState("");
	const [options, setOptions] = useState([]);
	const [externalValue, setExternalValue] = useState(null);
	function handleSetSelected(value) {
		onChange?.(value?.value);
		setSelected(value);
	}
	function handleAddOption(item) {
		setOptions((prev) => [...prev, item]);
	}
	return /* @__PURE__ */ jsx(SelectContextObject.Provider, {
		value: {
			open,
			setOpen,
			filter,
			setFilter,
			selected,
			setSelected: handleSetSelected,
			options,
			setOption: handleAddOption,
			externalValue,
			setExternalValue
		},
		children
	});
}
function SelectOptionContainer(props) {
	const { setOpen, setSelected, selected, setFilter, setOption } = useContext(SelectContextObject);
	const addedRef = useRef(false);
	function handleSetOption() {
		setSelected({
			label: props.label,
			value: props.value
		});
		setFilter("");
		setOpen(false);
	}
	useEffect(() => {
		if (!addedRef.current) {
			addedRef.current = true;
			setOption({
				label: props.label,
				value: props.value
			});
		}
		if (selected?.value === props.value) {
			setSelected({
				label: props.label,
				value: props.value
			});
			setFilter("");
		}
	}, []);
	return /* @__PURE__ */ jsx("span", {
		onClick: handleSetOption,
		className: props.className,
		children: props.label
	});
}
function SelectMenuContainer(props) {
	const { filter, externalValue, setSelected } = useContext(SelectContextObject);
	const items = Array.isArray(props.children) ? props.children : [props.children];
	useEffect(() => {
		if (externalValue != null && externalValue !== "") {
			const match = items.find((e) => e.props.value === externalValue);
			if (match) setSelected({
				value: externalValue,
				label: match.props.label
			});
		} else setSelected(null);
	}, [externalValue, items.length]);
	return /* @__PURE__ */ jsx("div", {
		className: `lib-w-full lib-flex lib-flex-col ${props.className ?? ""}`,
		children: items.filter((e) => e.props.label.toLowerCase().includes(filter.toLowerCase()))
	});
}
//#endregion
export { SelectContext, SelectContextObject, SelectMenuContainer, SelectOptionContainer, SelectRootContainer };
