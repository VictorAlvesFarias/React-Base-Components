import { DropdownContextObject } from "./dropdown-context.js";
import { useContext, useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/dropdown-option.tsx
function DropdownOptionContainer(props) {
	const { setOpen, setSelected, selected, setFilter, setOption } = useContext(DropdownContextObject);
	const addedRef = useRef(false);
	function handleSetOption() {
		setSelected(props);
		setFilter("");
		setOpen(false);
	}
	useEffect(() => {
		if (addedRef.current == false) {
			addedRef.current = true;
			setOption({
				label: props.label,
				value: props.value
			});
		}
		if (selected?.value == props.value) {
			setSelected(props);
			setFilter("");
		}
	}, []);
	return /* @__PURE__ */ jsx("span", {
		onClick: handleSetOption,
		className: props.className,
		children: props.label
	});
}
//#endregion
export { DropdownOptionContainer };
