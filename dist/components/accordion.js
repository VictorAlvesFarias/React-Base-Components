import { createContext, forwardRef, useContext, useLayoutEffect, useRef, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/components/accordion.tsx
var AccordionContextObject = createContext({
	open: false,
	setOpen: () => {}
});
function AccordionContext({ children }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsx(AccordionContextObject.Provider, {
		value: {
			open,
			setOpen
		},
		children
	});
}
function AccordionActivateIcon({ children }) {
	const { open } = useContext(AccordionContextObject);
	return open ? /* @__PURE__ */ jsx(Fragment, { children }) : null;
}
function AccordionDesactivateIcon({ children }) {
	const { open } = useContext(AccordionContextObject);
	return !open ? /* @__PURE__ */ jsx(Fragment, { children }) : null;
}
var AccordionContainer = forwardRef((props, ref) => {
	const { open } = useContext(AccordionContextObject);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);
	useLayoutEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		if (open) {
			setHeight(el.scrollHeight);
			const handleTransitionEnd = () => setHeight("auto");
			el.addEventListener("transitionend", handleTransitionEnd, { once: true });
			return () => el.removeEventListener("transitionend", handleTransitionEnd);
		}
		if (height === "auto") {
			setHeight(el.scrollHeight);
			requestAnimationFrame(() => setHeight(0));
		} else setHeight(0);
	}, [open]);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		style: { height: height === "auto" ? "auto" : `${height}px` },
		className: `lib-overflow-hidden lib-transition-all lib-duration-300 ${props.className ?? ""}`,
		children: props.children
	});
});
var AccordionTitleContainer = forwardRef((props, ref) => {
	const { open, setOpen } = useContext(AccordionContextObject);
	function handleClick(e) {
		setOpen(!open);
		props.onClick?.(e);
	}
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: props.className,
		onClick: handleClick,
		children: props.children
	});
});
//#endregion
export { AccordionActivateIcon, AccordionContainer, AccordionContext, AccordionContextObject, AccordionDesactivateIcon, AccordionTitleContainer };
