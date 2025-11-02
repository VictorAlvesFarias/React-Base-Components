import React from "react";
interface ITextAreaContainerProps {
    readonly?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
    onBlur?: (e: any) => any;
    ref?: any;
    value?: any;
    className: string;
    placeholder?: string;
    mask?: [RegExp, string];
    type?: string;
    loading?: boolean;
}
declare const TextAreaContainer: React.ForwardRefExoticComponent<Omit<ITextAreaContainerProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export { ITextAreaContainerProps, TextAreaContainer };
