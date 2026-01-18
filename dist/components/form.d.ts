import React from 'react';
interface IFormContainerProps extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit: (e: any) => any;
}
declare const FormContainer: React.ForwardRefExoticComponent<IFormContainerProps & React.RefAttributes<HTMLFormElement>>;
export { IFormContainerProps, FormContainer };
