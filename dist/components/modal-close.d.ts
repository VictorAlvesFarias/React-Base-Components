import React from 'react';
interface IModalCloseProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    callback?: (e: any) => any;
}
declare function ModalClose(props: IModalCloseProps): import("react/jsx-runtime").JSX.Element;
export { IModalCloseProps, ModalClose };
