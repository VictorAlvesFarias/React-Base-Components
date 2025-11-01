import React from "react";
import { IDropdownOptionValue } from "./dropdown-option";
interface DropdownContextType {
    setOpen: (e: boolean) => any;
    setFilter: (e: string) => any;
    setStarted: (e: string) => any;
    open: boolean;
    started: string | null;
    filter: string;
    selected: IDropdownOptionValue | null;
    setSelected: (e: IDropdownOptionValue | null) => any;
    setOption: (e: IDropdownOptionValue) => any;
    options: IDropdownOptionValue[];
}
interface DropdownContextComponent {
    children: React.ReactNode;
    onChange?: (e: any) => any;
}
declare function DropdownContext(props: DropdownContextComponent): import("react/jsx-runtime").JSX.Element;
declare const DropdownContextObject: React.Context<DropdownContextType>;
export default DropdownContext;
export { DropdownContextObject };
