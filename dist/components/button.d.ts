import { default as React } from 'react';
export interface IButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingComponent?: React.ReactNode;
}
export declare const ButtonContainer: React.ForwardRefExoticComponent<IButtonContainerProps & React.RefAttributes<any>>;
