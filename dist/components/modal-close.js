import { ModalContextObject } from "./modal-context.js";
import { useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/modal-close.tsx
function ModalClose(props) {
	const { setOpen } = useContext(ModalContextObject);
	function handleOpen(e) {
		setOpen(false);
		props.callback && props.callback(e);
	}
	return /* @__PURE__ */ jsx("div", {
		onClick: handleOpen,
		className: props.className,
		children: props.children
	});
}
//#endregion
export { ModalClose };
