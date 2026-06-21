import React, { createContext, useContext } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/if.tsx
var ConditionalGroupContextObject = createContext(false);
function ConditionalGroup({ children }) {
	const kids = React.Children.toArray(children);
	for (const child of kids) {
		if (!React.isValidElement(child)) continue;
		if (child.type === Else) continue;
		if (child.type === If) {
			if (child.props.conditional) return /* @__PURE__ */ jsx(ConditionalGroupContextObject.Provider, {
				value: true,
				children: child
			});
		}
	}
	const elseChild = kids.find((child) => React.isValidElement(child) && child.type === Else);
	if (elseChild) return /* @__PURE__ */ jsx(Fragment, { children: elseChild });
	return null;
}
function If({ conditional, children }) {
	if (useContext(ConditionalGroupContextObject)) return /* @__PURE__ */ jsx(Fragment, { children });
	if (conditional) return /* @__PURE__ */ jsx(Fragment, { children });
	return null;
}
function ElseIf({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
function Else({ children }) {
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
export { ConditionalGroup, Else, ElseIf, If };
