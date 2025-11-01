import React from 'react';
interface IModalOpenProps {
    callback?: (e: any) => any;
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
}
declare function ModalOpen(_: IModalOpenProps): import("react/jsx-runtime").JSX.Element;
export default ModalOpen;
export { IModalOpenProps };
