import React from "react";
interface ITextAreaContainerProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    mask?: [RegExp, string];
    loading?: boolean;
}
declare const TextAreaContainer: React.ForwardRefExoticComponent<ITextAreaContainerProps & React.RefAttributes<HTMLTextAreaElement>>;
export { ITextAreaContainerProps, TextAreaContainer };
