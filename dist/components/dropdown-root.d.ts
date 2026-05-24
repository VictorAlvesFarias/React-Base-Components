import { IDropdownMenuContainerProps } from './dropdown-menu';
import { default as React } from 'react';
interface IDropdownRootContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactElement<IDropdownMenuContainerProps>;
}
declare const DropdownRootContainer: React.ForwardRefExoticComponent<IDropdownRootContainerProps & React.RefAttributes<HTMLInputElement>>;
export { IDropdownRootContainerProps, DropdownRootContainer };
