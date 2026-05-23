import { forwardRef as e, useRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/form.tsx
var r = e((e, r) => {
	let i = t(null);
	function a(e) {
		i.current = e, r instanceof Function && r(e);
	}
	function o(t) {
		t.preventDefault(), e.onSubmit && e.onSubmit(t);
	}
	return /* @__PURE__ */ n("form", {
		ref: a,
		id: e.id,
		className: e.className,
		onSubmit: o,
		children: e.children
	});
});
//#endregion
export { r as FormContainer };
