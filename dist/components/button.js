import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const ButtonContainer = forwardRef((_, ref) => {
    return (_jsx("button", { ref: ref, className: _.className, onClick: _.onClick, "aria-disabled": _ === null || _ === void 0 ? void 0 : _.disabled, type: _.type, form: _.form, disabled: _.loading || (_ === null || _ === void 0 ? void 0 : _.disabled), children: _.loading ? _.loadingComponent : _.children }));
});
export default ButtonContainer;
