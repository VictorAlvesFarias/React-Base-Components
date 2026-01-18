import React from "react";
interface ICheckboxContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: any, i?: any) => any;
    data: any;
}
declare const CheckboxContainer: React.ForwardRefExoticComponent<ICheckboxContainerProps & React.RefAttributes<HTMLInputElement>>;
export { ICheckboxContainerProps, CheckboxContainer };
