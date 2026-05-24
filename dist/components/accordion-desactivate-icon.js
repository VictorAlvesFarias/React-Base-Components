import { AccordionContextObject } from "./accordion-context.js";
import { useContext } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/accordion-desactivate-icon.tsx
function AccordionDesactivateIcon(props) {
	const { open } = useContext(AccordionContextObject);
	return !open && /* @__PURE__ */ jsx(Fragment, { children: props.children });
}
//#endregion
export { AccordionDesactivateIcon };
