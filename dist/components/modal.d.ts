import { default as React } from 'react';
export interface IModalContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
}
export interface IModalController {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: () => boolean;
}
export interface IModalContextComponent {
    children: React.ReactNode;
    externalControl?: boolean;
    initialOpen?: boolean;
}
export interface IModalOpenProps extends React.HTMLAttributes<HTMLDivElement> {
    callback?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface IModalCloseProps extends React.HTMLAttributes<HTMLDivElement> {
    callback?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface IModalRootContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    callback?: () => void;
}
export declare const ModalContextObject: React.Context<IModalContextType>;
export declare const ModalContext: React.ForwardRefExoticComponent<IModalContextComponent & React.RefAttributes<IModalController>>;
export declare function ModalOpen({ callback, className, children }: IModalOpenProps): import("react/jsx-runtime").JSX.Element;
export declare function ModalClose({ callback, className, children }: IModalCloseProps): import("react/jsx-runtime").JSX.Element;
export declare function ModalRootContainer({ className, children }: IModalRootContainerProps): import("react/jsx-runtime").JSX.Element | null;
