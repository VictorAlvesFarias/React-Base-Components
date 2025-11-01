interface IAccordionContext {
    setOpen: (e: boolean) => any;
    open: boolean;
}
interface IAccordionContextComponent {
    children: React.ReactNode[] | React.ReactNode;
}
declare function AccordionContext(props: IAccordionContextComponent): import("react/jsx-runtime").JSX.Element;
declare const AccordionContextObject: import("react").Context<IAccordionContext>;
export default AccordionContext;
export { AccordionContextObject, IAccordionContextComponent };
