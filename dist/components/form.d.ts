import { default as React } from 'react';
export interface IFormContainerProps extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit: (e: any) => any;
}
export declare const FormContainer: React.ForwardRefExoticComponent<IFormContainerProps & React.RefAttributes<HTMLFormElement>>;
