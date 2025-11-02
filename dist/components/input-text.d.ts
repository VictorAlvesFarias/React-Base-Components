import React from "react";
interface ITextContainerProps {
    readonly?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
    onBlur?: (e: any) => any;
    ref?: any;
    value?: any;
    className: string;
    placeholder?: string;
    mask?: [RegExp, string];
    type?: string;
    date?: string;
    loading?: boolean;
    debug?: boolean;
}
declare const TextContainer: React.ForwardRefExoticComponent<Omit<ITextContainerProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { ITextContainerProps, TextContainer };
