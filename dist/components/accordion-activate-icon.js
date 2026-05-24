import { AccordionContextObject } from "./accordion-context.js";
import { useContext } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/accordion-activate-icon.tsx
function AccordionActivateIcon(props) {
	const { open } = useContext(AccordionContextObject);
	return open && /* @__PURE__ */ jsx(Fragment, { children: props.children });
}
//#endregion
export { AccordionActivateIcon };
