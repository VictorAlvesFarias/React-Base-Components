import React from 'react';
interface IModalOpenProps extends React.HTMLAttributes<HTMLDivElement> {
    callback?: (e: any) => any;
}
declare function ModalOpen(_: IModalOpenProps): import("react/jsx-runtime").JSX.Element;
export { IModalOpenProps, ModalOpen };
