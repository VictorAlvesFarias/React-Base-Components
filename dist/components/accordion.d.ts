import React from 'react';
interface IAccordionContainerProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: any) => any;
}
declare const AccordionContainer: React.ForwardRefExoticComponent<IAccordionContainerProps & React.RefAttributes<HTMLDivElement>>;
export default AccordionContainer;
export { IAccordionContainerProps };
