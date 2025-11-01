import React from 'react';
interface IButtonContainerProps {
    loading?: boolean;
    loadingComponent?: React.ReactNode;
    children: React.ReactNode;
    className: string;
    ref: any;
    disabled?: boolean;
    onClick?: (e: any) => any;
    type?: "submit" | "reset" | "button" | undefined;
    form?: string;
}
declare const ButtonContainer: React.ForwardRefExoticComponent<Omit<IButtonContainerProps, "ref"> & React.RefAttributes<any>>;
export default ButtonContainer;
export { IButtonContainerProps };
