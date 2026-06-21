import { default as React } from 'react';
export interface IAccordionContext {
    open: boolean;
    setOpen: (value: boolean) => void;
}
export interface IAccordionContextComponent {
    children: React.ReactNode;
}
export interface IAccordionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface IAccordionTitleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface IAccordionDesactivateIconProps {
    children: React.ReactNode;
}
export interface IAccordionActivateIconProps {
    children: React.ReactNode;
}
export declare const AccordionContextObject: React.Context<IAccordionContext>;
export declare function AccordionContext({ children }: IAccordionContextComponent): import("react/jsx-runtime").JSX.Element;
export declare function AccordionActivateIcon({ children }: IAccordionActivateIconProps): import("react/jsx-runtime").JSX.Element | null;
export declare function AccordionDesactivateIcon({ children }: IAccordionDesactivateIconProps): import("react/jsx-runtime").JSX.Element | null;
export declare const AccordionContainer: React.ForwardRefExoticComponent<IAccordionContainerProps & React.RefAttributes<HTMLDivElement>>;
export declare const AccordionTitleContainer: React.ForwardRefExoticComponent<IAccordionTitleContainerProps & React.RefAttributes<HTMLDivElement>>;
