import { forwardRef as e } from "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/button.tsx
var n = e((e, n) => /* @__PURE__ */ t("button", {
	ref: n,
	className: e.className,
	onClick: e.onClick,
	"aria-disabled": e?.disabled,
	type: e.type,
	form: e.form,
	disabled: e.loading || e?.disabled,
	children: e.loading ? e.loadingComponent : e.children
}));
//#endregion
export { n as ButtonContainer };
