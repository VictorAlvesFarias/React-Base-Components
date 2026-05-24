import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/button.tsx
var ButtonContainer = forwardRef((_, ref) => {
	return /* @__PURE__ */ jsx("button", {
		ref,
		className: _.className,
		onClick: _.onClick,
		"aria-disabled": _?.disabled,
		type: _.type,
		form: _.form,
		disabled: _.loading || _?.disabled,
		children: _.loading ? _.loadingComponent : _.children
	});
});
//#endregion
export { ButtonContainer };
