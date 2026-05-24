import { ModalContextObject } from "./modal-context.js";
import { useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/modal-open.tsx
function ModalOpen(_) {
	const { setOpen } = useContext(ModalContextObject);
	function handleOpen(e) {
		setOpen(true);
		_.callback;
	}
	return /* @__PURE__ */ jsx("div", {
		onClick: handleOpen,
		className: _.className,
		children: _.children
	});
}
//#endregion
export { ModalOpen };
