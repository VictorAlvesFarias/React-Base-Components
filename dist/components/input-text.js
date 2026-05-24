import { forwardRef, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/input-text.tsx
var TextContainer = forwardRef((props, ref) => {
	const internalRef = useRef(null);
	const propsRef = useRef(props);
	function parseCustomDate(dateStr, format) {
		if (!/^(dd|mm|yyyy)([\/\-\.])(dd|mm|yyyy)\2(dd|mm|yyyy)$/.test(format)) return null;
		const separator = format.match(/[^a-zA-Z]/)?.[0];
		if (!separator) return null;
		const formatParts = format.split(separator);
		const dateParts = dateStr.split(separator);
		if (formatParts.length !== 3 || dateParts.length !== 3) return null;
		const map = {};
		formatParts.forEach((part, idx) => {
			map[part] = dateParts[idx];
		});
		const yyyy = map["yyyy"];
		const mm = map["mm"];
		const dd = map["dd"];
		if (!yyyy || !mm || !dd) return null;
		const isoString = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
		const date = new Date(isoString);
		if (isNaN(date.getTime())) return null;
		return date;
	}
	function formatMask(initialValue, regex, replacement) {
		let value = initialValue;
		value = value.replace(/\D/g, "");
		value = value.replace(regex, replacement);
		return value;
	}
	function formatDate(dateIso, format) {
		try {
			if (dateIso == null || format == null) {
				console.error("Date value or date format is undefined.");
				return "";
			}
			if (parseCustomDate(dateIso, format) != null) return dateIso;
			let date = new Date(dateIso);
			if (isNaN(date.valueOf())) return "";
			const map = {
				dd: String(date.getDate()).padStart(2, "0"),
				mm: String(date.getMonth() + 1).padStart(2, "0"),
				yyyy: String(date.getFullYear())
			};
			return format.replace(/dd|mm|yyyy/gi, (matched) => map[matched]);
		} catch (error) {
			console.error("Value date is invalid or date format is missing.");
			return "";
		}
	}
	function handleRef(element) {
		if (ref instanceof Function) ref(element);
		if (element == null) return;
		if (propsRef.current.type == "date") element.value = formatDate(element?.value, props?.date);
		else if (propsRef.current.mask) {
			const [regex, replacement] = propsRef.current.mask;
			element.value = formatMask(element.value, regex, replacement);
		}
		internalRef.current = element;
	}
	function handleOnChange(e) {
		if (propsRef.current.type == "date") e.target.value = formatDate(e.target.value, props?.date);
		else if (propsRef.current.mask) {
			const [regex, replacement] = propsRef.current.mask;
			e.target.value = formatMask(e.target.value, regex, replacement);
		} else e.target.value = e.target.value;
		propsRef.current?.onChange && propsRef.current.onChange(e);
	}
	return /* @__PURE__ */ jsx("div", {
		onClick: () => internalRef.current?.focus(),
		className: props.className,
		"aria-disabled": props.disabled,
		"aria-atomic": props.loading,
		children: /* @__PURE__ */ jsx("input", {
			...props,
			type: "text",
			className: "lib-bg-transparent lib-outline-none lib-w-full lib-h-full lib-flex",
			placeholder: propsRef.current.placeholder,
			ref: handleRef,
			onChange: handleOnChange
		})
	});
});
//#endregion
export { TextContainer };
