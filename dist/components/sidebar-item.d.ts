import React from "react";
interface ISidebarItemContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'unselectable'> {
    href?: string;
    selected?: string;
    menu?: boolean;
    unselectable?: boolean;
    redirect?: (e: any) => string;
    disable?: boolean;
    commons?: string[];
}
declare function SidebarSidebarItemContainerContainer(props: ISidebarItemContainerProps): import("react/jsx-runtime").JSX.Element;
export { ISidebarItemContainerProps, SidebarSidebarItemContainerContainer };
