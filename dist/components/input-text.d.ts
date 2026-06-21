import { default as React } from 'react';
export interface ITextContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask?: [RegExp, string];
    date?: string;
    loading?: boolean;
    debug?: boolean;
}
export declare const TextContainer: React.ForwardRefExoticComponent<ITextContainerProps & React.RefAttributes<HTMLInputElement>>;
