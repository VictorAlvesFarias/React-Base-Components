import "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/if.tsx
function If(props) {
	return props.conditional && /* @__PURE__ */ jsx(Fragment, { children: props.children });
}
//#endregion
export { If };
