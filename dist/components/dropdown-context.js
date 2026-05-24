import { createContext, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/dropdown-context.tsx
function DropdownContext(props) {
	const [open, setOpen] = useState(false);
	const [started, setStarted] = useState(null);
	const [selected, setSelected] = useState(null);
	const [filter, setFilter] = useState("");
	const [options, setOption] = useState([]);
	function handleAddOption(item) {
		setOption((e) => [...e, item]);
	}
	function handleSetSelected(e) {
		props?.onChange && props.onChange(e?.value);
		setSelected(e);
	}
	const context = {
		setOpen,
		open,
		setSelected: handleSetSelected,
		selected,
		filter,
		setFilter,
		started,
		setStarted,
		setOption: handleAddOption,
		options
	};
	return /* @__PURE__ */ jsx(DropdownContextObject.Provider, {
		value: context,
		children: props.children
	});
}
var DropdownContextObject = createContext({
	open: false,
	setOpen: () => {},
	setSelected: () => {},
	setStarted: () => {},
	setFilter: () => {},
	setOption: () => {},
	selected: null,
	filter: "",
	started: null,
	options: []
});
//#endregion
export { DropdownContext, DropdownContextObject };
