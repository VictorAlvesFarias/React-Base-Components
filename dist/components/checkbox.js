import { forwardRef as e, useEffect as t, useRef as n, useState as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/checkbox.tsx
var o = e((e, o) => {
	let s = n(null), [c, l] = r(!1);
	function u(e) {
		s.current = e, o instanceof Function && o(e);
	}
	function d(t) {
		!e.disabled && (e.value == null || e.value == null) ? (c ? t.target.value = !1 : t.target.value = !0, e?.onChange && e.onChange(t, e.data), l(!c)) : !e.disabled && e.value != null && e.value != null && e?.onChange && e.onChange(t, e.data);
	}
	return t(() => {
		l(s.current?.value == "true");
	}, [s.current?.value]), t(() => {
		l(e.value?.toString() == "true");
	}, [e.value]), /* @__PURE__ */ a("label", {
		"aria-checked": c,
		className: e.className,
		children: [/* @__PURE__ */ i("input", {
			...e,
			children: null,
			className: "hidden",
			ref: u,
			onClick: d
		}), c && e.children]
	});
});
//#endregion
export { o as CheckboxContainer };
