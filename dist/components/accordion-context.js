import { createContext, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/accordion-context.tsx
function AccordionContext(props) {
	const [open, setOpen] = useState(false);
	const context = {
		setOpen: (e) => {
			setOpen(e);
		},
		open
	};
	return /* @__PURE__ */ jsx(AccordionContextObject.Provider, {
		value: context,
		children: props.children
	});
}
var AccordionContextObject = createContext({
	open: false,
	setOpen: () => {}
});
//#endregion
export { AccordionContext, AccordionContextObject };
