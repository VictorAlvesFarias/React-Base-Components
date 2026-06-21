import { default as React } from 'react';
export interface ICheckboxContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: any, i?: any) => any;
    data: any;
}
export declare const CheckboxContainer: React.ForwardRefExoticComponent<ICheckboxContainerProps & React.RefAttributes<HTMLInputElement>>;
