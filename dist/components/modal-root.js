import { ModalContextObject } from "./modal-context.js";
import { useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/modal-root.tsx
function ModalRootContainer(_) {
	const { open } = useContext(ModalContextObject);
	return open && /* @__PURE__ */ jsx("div", {
		"aria-checked": open,
		className: _.className + " z-50 w-full top-0 left-0 h-screen fixed flex",
		children: _.children
	});
}
//#endregion
export { ModalRootContainer };
