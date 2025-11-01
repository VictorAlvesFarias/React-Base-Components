import React from 'react';
interface IFormContainerProps {
    className: string;
    onSubmit: (e: any) => any;
    children: React.ReactNode;
    id?: string;
}
declare const FormContainer: React.ForwardRefExoticComponent<IFormContainerProps & React.RefAttributes<HTMLFormElement>>;
export default FormContainer;
export { IFormContainerProps };
