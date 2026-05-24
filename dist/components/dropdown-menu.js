import { DropdownContextObject } from "./dropdown-context.js";
import { useContext, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function DropdownMenuContainer(props) {
	const { filter, started, setSelected } = useContext(DropdownContextObject);
	const items = Array.isArray(props.children) ? props.children : [props.children];
	useEffect(() => {
		if (started != null) setSelected({
			value: started,
			label: items.filter((e) => e.props.value == started)[0].props.label
		});
	}, [started]);
	return /* @__PURE__ */ jsx("div", {
		className: "lib-w-full lib-flex lib-flex-col" + props.className,
		children: items.filter((e) => e.props.label.toLowerCase().includes(filter.toLowerCase())).map((e) => e)
	});
}
//#endregion
export { DropdownMenuContainer };
