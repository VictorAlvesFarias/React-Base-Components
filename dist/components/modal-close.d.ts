import React from 'react';
interface IModalCloseProps {
    open?: boolean;
    callback?: (e: any) => any;
    className?: string;
    children?: React.ReactNode;
}
declare function ModalClose(props: IModalCloseProps): import("react/jsx-runtime").JSX.Element;
export { IModalCloseProps, ModalClose };
