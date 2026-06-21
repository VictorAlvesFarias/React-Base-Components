import { createContext, forwardRef, useContext, useImperativeHandle, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/modal.tsx
var ModalContextObject = createContext({
	open: false,
	setOpen: () => {}
});
var ModalContext = forwardRef(({ children, initialOpen = false }, ref) => {
	const [open, setOpen] = useState(initialOpen);
	useImperativeHandle(ref, () => ({
		open: () => setOpen(true),
		close: () => setOpen(false),
		toggle: () => setOpen((prev) => !prev),
		isOpen: () => open
	}));
	return /* @__PURE__ */ jsx(ModalContextObject.Provider, {
		value: {
			open,
			setOpen
		},
		children
	});
});
function ModalOpen({ callback, className, children }) {
	const { setOpen } = useContext(ModalContextObject);
	function handleOpen(e) {
		setOpen(true);
		callback?.(e);
	}
	return /* @__PURE__ */ jsx("div", {
		onClick: handleOpen,
		className,
		children
	});
}
function ModalClose({ callback, className, children }) {
	const { setOpen } = useContext(ModalContextObject);
	function handleClose(e) {
		setOpen(false);
		callback?.(e);
	}
	return /* @__PURE__ */ jsx("div", {
		onClick: handleClose,
		className,
		children
	});
}
function ModalRootContainer({ className, children }) {
	const { open } = useContext(ModalContextObject);
	return open ? /* @__PURE__ */ jsx("div", {
		className: `${className ?? ""} lib-z-50 lib-w-full lib-top-0 lib-left-0 lib-h-screen lib-fixed lib-flex`,
		children
	}) : null;
}
//#endregion
export { ModalClose, ModalContext, ModalContextObject, ModalOpen, ModalRootContainer };
