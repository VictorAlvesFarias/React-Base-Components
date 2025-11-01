import React from "react";
interface IModalContextType {
    setOpen: (e: boolean) => any;
    open: boolean;
}
interface IModalContextComponent {
    children: React.ReactNode[] | React.ReactNode;
    externalControl?: boolean;
    initialOpen?: boolean;
}
interface IModalController {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: () => boolean;
}
declare const ModalContext: React.ForwardRefExoticComponent<IModalContextComponent & React.RefAttributes<IModalController>>;
declare const ModalContextObject: React.Context<IModalContextType>;
export { ModalContextObject, ModalContext, IModalController };
