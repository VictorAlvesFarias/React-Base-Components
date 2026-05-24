import { forwardRef as e, useRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/text-area.tsx
var r = e((e, r) => {
	let i = t(null);
	function a(e) {
		i.current = e, r instanceof Function && r(e);
	}
	function o(t) {
		t.target.value = e.mask ? t.target.value.replace(/\D/g, "").replace(e.mask[0], e.mask[1]) : t.target.value, e?.onChange && e.onChange(t);
	}
	return /* @__PURE__ */ n("div", {
		onClick: () => i.current?.focus(),
		className: e.className,
		"aria-disabled": e.disabled,
		"aria-atomic": e.loading,
		children: /* @__PURE__ */ n("textarea", {
			...e,
			className: "bg-transparent outline-none w-full h-full resize-none",
			placeholder: e.placeholder,
			ref: a,
			onChange: o
		})
	});
});
//#endregion
export { r as TextAreaContainer };
