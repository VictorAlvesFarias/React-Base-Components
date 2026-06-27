import { createContext, forwardRef, useContext, useImperativeHandle, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/button-toogle.tsx
var ToggleContextObject = createContext({
	active: false,
	setActive: () => {}
});
var ToggleContext = forwardRef(({ children, initialActive = false, onChange }, ref) => {
	const [active, setActive] = useState(initialActive);
	function handleSetActive(value) {
		setActive(value);
		onChange?.(value);
	}
	useImperativeHandle(ref, () => ({
		activate: () => handleSetActive(true),
		deactivate: () => handleSetActive(false),
		toggle: () => handleSetActive(!active),
		isActive: () => active
	}));
	return /* @__PURE__ */ jsx(ToggleContextObject.Provider, {
		value: {
			active,
			setActive: handleSetActive
		},
		children
	});
});
ToggleContext.displayName = "ToggleContext";
var ToggleButton = forwardRef((props, ref) => {
	const { active, setActive } = useContext(ToggleContextObject);
	function handleClick(e) {
		setActive(!active);
		props.onClick?.(e);
	}
	return /* @__PURE__ */ jsx("button", {
		ref,
		type: "button",
		"aria-pressed": active,
		...props,
		onClick: handleClick,
		children: props.children
	});
});
ToggleButton.displayName = "ToggleButton";
function ToggleActivateIcon({ children }) {
	const { active } = useContext(ToggleContextObject);
	return active ? /* @__PURE__ */ jsx(Fragment, { children }) : null;
}
function ToggleDeactivateIcon({ children }) {
	const { active } = useContext(ToggleContextObject);
	return !active ? /* @__PURE__ */ jsx(Fragment, { children }) : null;
}
//#endregion
export { ToggleActivateIcon, ToggleButton, ToggleContext, ToggleDeactivateIcon };
