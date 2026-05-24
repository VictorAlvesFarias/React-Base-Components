import { AccordionContextObject } from "./accordion-context.js";
import { forwardRef, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/accordion-title.tsx
var AccordionTitleContainer = forwardRef((_, ref) => {
	const { open, setOpen } = useContext(AccordionContextObject);
	function handleOpenAccordionTitle(e) {
		setOpen(!open);
		_.onClick && _.onClick(e);
	}
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: _.className,
		onClick: handleOpenAccordionTitle,
		children: _.children
	});
});
//#endregion
export { AccordionTitleContainer };
