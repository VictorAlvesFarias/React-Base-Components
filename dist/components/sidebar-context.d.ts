import React from "react";
interface ISidebarContext {
    open: boolean;
    setOpen: (e: boolean) => any;
    selected: string;
}
interface ISiderbarContextComponent {
    children: React.ReactNode;
    getPathname?: () => string;
}
declare const SidebarContextObject: React.Context<ISidebarContext>;
declare function SidebarContext(props: ISiderbarContextComponent): import("react/jsx-runtime").JSX.Element;
export default SidebarContext;
export { SidebarContextObject, ISidebarContext, ISiderbarContextComponent };
