import { ModalContextObject } from "./modal-context.js";
import { useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/modal-root.tsx
function ModalRootContainer(_) {
	const { open } = useContext(ModalContextObject);
	return open && /* @__PURE__ */ jsx("div", {
		"aria-checked": open,
		className: _.className + " lib-z-50 lib-w-full lib-top-0 lib-left-0 lib-h-screen lib-fixed lib-flex",
		children: _.children
	});
}
//#endregion
export { ModalRootContainer };
