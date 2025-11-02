import { IDropdownMenuContainerProps } from "./dropdown-menu";
import React from "react";
interface IDropdownRootContainerProps {
    readonly?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (e: any) => any;
    onBlur?: (e: any) => any;
    ref?: any;
    value?: any;
    children: React.ReactElement<IDropdownMenuContainerProps>;
    className?: string;
    placeholder?: string;
}
declare const DropdownRootContainer: React.ForwardRefExoticComponent<Omit<IDropdownRootContainerProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { IDropdownRootContainerProps, DropdownRootContainer };
