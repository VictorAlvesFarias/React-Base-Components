import React from "react";
import { IDropdownOptionValue } from "./dropdown-option";
interface IDropdownMenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    onValueChange?: (_: IDropdownOptionValue) => void;
    children: React.ReactElement<IDropdownOptionValue> | React.ReactElement<IDropdownOptionValue>[];
}
declare function DropdownMenuContainer(props: IDropdownMenuContainerProps): import("react/jsx-runtime").JSX.Element;
export { IDropdownMenuContainerProps, DropdownMenuContainer };
