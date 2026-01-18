import React from 'react';
interface IButtonContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingComponent?: React.ReactNode;
}
declare const ButtonContainer: React.ForwardRefExoticComponent<IButtonContainerProps & React.RefAttributes<any>>;
export { IButtonContainerProps, ButtonContainer };
