import { default as React } from 'react';
export interface ISelectOptionValue {
    value: any;
    label: string;
}
export interface ISelectOptionContainerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'defaultValue'> {
    value: any;
    label: string;
    defaultValue?: boolean;
}
export interface ISelectMenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    onValueChange?: (_: ISelectOptionValue) => void;
    children: React.ReactElement<ISelectOptionValue> | React.ReactElement<ISelectOptionValue>[];
}
export interface ISelectRootContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactElement<ISelectMenuContainerProps>;
}
export interface SelectContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
    filter: string;
    setFilter: (value: string) => void;
    selected: ISelectOptionValue | null;
    setSelected: (value: ISelectOptionValue | null) => void;
    options: ISelectOptionValue[];
    setOption: (value: ISelectOptionValue) => void;
    externalValue: any;
    setExternalValue: (value: any) => void;
}
export interface SelectContextComponent {
    children: React.ReactNode;
    onChange?: (value: any) => void;
}
export declare const SelectContextObject: React.Context<SelectContextType>;
export declare const SelectRootContainer: React.ForwardRefExoticComponent<ISelectRootContainerProps & React.RefAttributes<HTMLInputElement>>;
export declare function SelectContext({ children, onChange }: SelectContextComponent): import("react/jsx-runtime").JSX.Element;
export declare function SelectOptionContainer(props: ISelectOptionContainerProps): import("react/jsx-runtime").JSX.Element;
export declare function SelectMenuContainer(props: ISelectMenuContainerProps): import("react/jsx-runtime").JSX.Element;
