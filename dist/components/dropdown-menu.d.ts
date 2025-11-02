import React from "react";
import { IDropdownOptionValue } from "./dropdown-option";
interface IDropdownMenuContainerProps {
    onValueChange?: (_: IDropdownOptionValue) => void;
    children: React.ReactElement<IDropdownOptionValue> | React.ReactElement<IDropdownOptionValue>[];
    className: string;
}
declare function DropdownMenuContainer(props: IDropdownMenuContainerProps): import("react/jsx-runtime").JSX.Element;
export { IDropdownMenuContainerProps, DropdownMenuContainer };
