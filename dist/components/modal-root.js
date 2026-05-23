import { ModalContextObject as e } from "./modal-context.js";
import { useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/modal-root.tsx
function r(r) {
	let { open: i } = t(e);
	return i && /* @__PURE__ */ n("div", {
		"aria-checked": i,
		className: r.className + " z-50 w-full top-0 left-0 h-screen fixed flex",
		children: r.children
	});
}
//#endregion
export { r as ModalRootContainer };
