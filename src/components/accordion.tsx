import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import { AccordionContextObject } from './accordion-context'

interface IAccordionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AccordionContainer = forwardRef<HTMLDivElement, IAccordionContainerProps>((props, ref) => {
    const { open } = useContext(AccordionContextObject)
    const [height, setHeight] = useState('0px')
    const contentRef = useRef<HTMLDivElement>(null)

    // merges o ref externo com o interno
    function handleRef(element: HTMLDivElement | null) {
        if (ref instanceof Function) {
            ref(element)
        }

        else if (ref) {
            ref.current = element
        }

        contentRef.current = element
    }

    useEffect(() => {
        const el = contentRef.current

        if (!el) {
            return
        }

        if (open) {
            setHeight(el.scrollHeight + 'px')

            const timeout = setTimeout(() => setHeight('auto'), 300)

            return () => clearTimeout(timeout)
        }
        else {
            setHeight(el.scrollHeight + 'px')
            requestAnimationFrame(() => setHeight('0px'))
        }
    }, [open, props.children])

    return (
        <div
            ref={handleRef}
            className={`overflow-hidden transition-all duration-300 ${props.className || ''}`}
            style={{ height }}
            {...props}
        >
            {props.children}
        </div>
    )
})

export {
    IAccordionContainerProps,
    AccordionContainer
}
