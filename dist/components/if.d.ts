import React from "react";
interface IIfProps {
    conditional: boolean | undefined | null;
    children: React.ReactNode;
}
declare function If(props: IIfProps): false | import("react/jsx-runtime").JSX.Element | null | undefined;
export { If };
