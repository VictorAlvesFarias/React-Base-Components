import React from 'react';
interface IAccordionTitleContainerProps {
    children: React.ReactNode;
    className: string;
    ref: any;
    onClick?: (e: any) => any;
}
declare const AccordionTitleContainer: React.ForwardRefExoticComponent<Omit<IAccordionTitleContainerProps, "ref"> & React.RefAttributes<any>>;
export default AccordionTitleContainer;
export { IAccordionTitleContainerProps };
