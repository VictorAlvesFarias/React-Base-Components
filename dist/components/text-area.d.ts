import { default as React } from 'react';
export interface ITextAreaContainerProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    mask?: [RegExp, string];
    loading?: boolean;
}
export declare const TextAreaContainer: React.ForwardRefExoticComponent<ITextAreaContainerProps & React.RefAttributes<HTMLTextAreaElement>>;
