import React from "react";
interface ISidebarItemContainerProps {
    className: string;
    children: React.ReactNode;
    href?: string;
    selected?: string;
    menu?: boolean;
    unselectable?: boolean;
    onClick?: (e: any) => any;
    redirect?: (e: any) => string;
    disable?: boolean;
    commons?: string[];
}
declare function SidebarSidebarItemContainerContainer(props: ISidebarItemContainerProps): import("react/jsx-runtime").JSX.Element;
export { ISidebarItemContainerProps, SidebarSidebarItemContainerContainer };
