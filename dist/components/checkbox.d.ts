import React from "react";
interface ICheckboxContainerProps {
    readonly?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (e: any, i?: any) => any;
    onBlur?: (e: any) => any;
    ref?: any;
    value?: any;
    checked?: boolean;
    className?: string;
    children: React.ReactNode;
    data: any;
}
declare const CheckboxContainer: React.ForwardRefExoticComponent<Omit<ICheckboxContainerProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default CheckboxContainer;
export { ICheckboxContainerProps };
