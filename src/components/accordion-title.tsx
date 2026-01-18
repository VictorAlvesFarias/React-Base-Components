import React, { LegacyRef, forwardRef, useContext } from 'react';
import { AccordionContextObject } from './accordion-context';

interface IAccordionTitleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AccordionTitleContainer = forwardRef<LegacyRef<HTMLDivElement> | any, IAccordionTitleContainerProps>((_, ref: any) => {
    const { open, setOpen } = useContext(AccordionContextObject)

    function handleOpenAccordionTitle(e: any) {
        setOpen(!open)
        _.onClick ? _.onClick(e) : null
    }

    return (
        <div
            ref={ref}
            className={_.className}
            onClick={handleOpenAccordionTitle}
        >
            {_.children}
        </div>
    );
})

export {
    IAccordionTitleContainerProps,
    AccordionTitleContainer
}
