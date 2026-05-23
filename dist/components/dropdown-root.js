import { DropdownContextObject as e } from "./dropdown-context.js";
import { forwardRef as t, useContext as n, useEffect as r, useRef as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
var c = t((t, c) => {
	let { open: l, setOpen: u, selected: d, setSelected: f, filter: p, setFilter: m, setStarted: h, options: g } = n(e), _ = i(null), v = i(null), y = {
		...t,
		children: null
	};
	function b(e) {
		c instanceof Function && c(e), _.current = e;
	}
	function x(e) {
		f(null), m(e.target.value), _.current?.value && (_.current.value = "", c instanceof Function && c(_.current));
	}
	function S() {
		u(!0), v.current?.focus();
	}
	return r(() => {
		h(y.value?.toString() ?? "");
	}, []), r(() => {
		let e = g.find((e) => e.value == _?.current?.value);
		if (e == null) {
			f(null);
			return;
		}
		f({
			label: e?.label ?? "",
			value: e?.value
		});
	}, [_.current?.value]), /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ s("div", {
		className: "w-full relative",
		children: [/* @__PURE__ */ s("div", {
			"aria-disabled": t.disabled,
			className: t.className + " z-[9] relative",
			onClick: t.disabled ? () => null : S,
			children: [/* @__PURE__ */ o("input", {
				ref: v,
				className: "bg-transparent outline-none w-full ",
				type: "text",
				disabled: t.disabled,
				onChange: x,
				value: d?.label ? d.label : p,
				placeholder: t.placeholder
			}), /* @__PURE__ */ o("input", {
				...y,
				"aria-hidden": !!(t.value && t.value != ""),
				className: "bg-transparent outline-none w-0",
				disabled: t.disabled,
				value: y.value || "",
				ref: b,
				onChange: (e) => {
					e.target.value, t?.onChange && t.onChange(e);
				}
			})]
		}), /* @__PURE__ */ o("div", {
			"aria-hidden": !l,
			className: "absolute w-full h-full aria-hidden:hidden z-[12] ",
			children: t.children
		})]
	}), /* @__PURE__ */ o("div", {
		"aria-hidden": !l,
		onClick: () => u(!l),
		className: "z-[10] fixed w-full top-0 left-0 h-full aria-hidden:hidden"
	})] });
});
//#endregion
export { c as DropdownRootContainer };
