import { createContext as e, forwardRef as t, useImperativeHandle as n, useState as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/modal-context.tsx
var a = t((e, t) => {
	let [a, s] = r(e.initialOpen || !1);
	n(t, () => ({
		open: () => s(!0),
		close: () => s(!1),
		toggle: () => s(!a),
		isOpen: () => a
	}));
	let c = {
		setOpen: (e) => {
			s(e);
		},
		open: a
	};
	return /* @__PURE__ */ i(o.Provider, {
		value: c,
		children: e.children
	});
});
a.displayName = "ModalContext";
var o = e({
	open: !1,
	setOpen: () => {}
});
//#endregion
export { a as ModalContext, o as ModalContextObject };
