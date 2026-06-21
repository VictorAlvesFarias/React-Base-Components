import { default as React } from 'react';
export interface ISidebarContext {
    open: boolean;
    setOpen: (value: boolean) => void;
    selected: string;
}
export interface ISidebarContextComponent {
    children: React.ReactNode;
    getPathname?: () => string;
}
export interface ISidebarHamburguerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface ISidebarItemContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'unselectable'> {
    href?: string;
    selected?: string;
    menu?: boolean;
    unselectable?: boolean;
    redirect?: (href: string) => string;
    disable?: boolean;
    commons?: string[];
}
export interface IMenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const SidebarContextObject: React.Context<ISidebarContext>;
export declare function SidebarContext({ children, getPathname }: ISidebarContextComponent): import("react/jsx-runtime").JSX.Element;
export declare function SidebarHamburguerContainer({ className, children }: ISidebarHamburguerContainerProps): import("react/jsx-runtime").JSX.Element;
export declare function SidebarItemContainer(props: ISidebarItemContainerProps): import("react/jsx-runtime").JSX.Element;
export declare function MenuContainer({ className, children }: IMenuContainerProps): import("react/jsx-runtime").JSX.Element;
