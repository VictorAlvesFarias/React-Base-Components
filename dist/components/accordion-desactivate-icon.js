import { AccordionContextObject as e } from "./accordion-context.js";
import { useContext as t } from "react";
import { Fragment as n, jsx as r } from "react/jsx-runtime";
//#region src/components/accordion-desactivate-icon.tsx
function i(i) {
	let { open: a } = t(e);
	return !a && /* @__PURE__ */ r(n, { children: i.children });
}
//#endregion
export { i as AccordionDesactivateIcon };
