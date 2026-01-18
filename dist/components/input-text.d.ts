import React from "react";
interface ITextContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: [RegExp, string];
    date?: string;
    loading?: boolean;
    debug?: boolean;
}
declare const TextContainer: React.ForwardRefExoticComponent<ITextContainerProps & React.RefAttributes<HTMLInputElement>>;
export { ITextContainerProps, TextContainer };
