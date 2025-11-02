import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
function If(props) {
    return (props.conditional &&
        _jsx(_Fragment, { children: props.children }));
}
export { If };
