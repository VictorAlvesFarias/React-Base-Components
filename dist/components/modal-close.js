import { ModalContextObject as e } from "./modal-context.js";
import { useContext as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/modal-close.tsx
function r(r) {
	let { setOpen: i } = t(e);
	function a(e) {
		i(!1), r.callback && r.callback(e);
	}
	return /* @__PURE__ */ n("div", {
		onClick: a,
		className: r.className,
		children: r.children
	});
}
//#endregion
export { r as ModalClose };
