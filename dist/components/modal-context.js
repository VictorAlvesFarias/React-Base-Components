import { createContext, forwardRef, useImperativeHandle, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/modal-context.tsx
var ModalContext = forwardRef((props, ref) => {
	const [open, setOpen] = useState(props.initialOpen || false);
	useImperativeHandle(ref, () => ({
		open: () => setOpen(true),
		close: () => setOpen(false),
		toggle: () => setOpen(!open),
		isOpen: () => open
	}));
	const context = {
		setOpen: (e) => {
			setOpen(e);
		},
		open
	};
	return /* @__PURE__ */ jsx(ModalContextObject.Provider, {
		value: context,
		children: props.children
	});
});
ModalContext.displayName = "ModalContext";
var ModalContextObject = createContext({
	open: false,
	setOpen: () => {}
});
//#endregion
export { ModalContext, ModalContextObject };
