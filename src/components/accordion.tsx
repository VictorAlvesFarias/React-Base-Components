import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import { AccordionContextObject } from './accordion-context'

interface IAccordionContainerProps {
    children: React.ReactNode
    className?: string
    onClick?: (e: any) => any
}

const AccordionContainer = forwardRef<HTMLDivElement, IAccordionContainerProps>((props, ref) => {
    const { open } = useContext(AccordionContextObject)
    const innerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState('0px')

    useEffect(() => {
        if (innerRef.current) {
            if (open) {
                const el = innerRef.current
                const scrollHeight = el.scrollHeight
                setHeight(scrollHeight + 'px')
                const timeout = setTimeout(() => setHeight('auto'), 300)
                return () => clearTimeout(timeout)
            } else {
                setHeight(innerRef.current.scrollHeight + 'px')
                requestAnimationFrame(() => setHeight('0px'))
            }
        }
    }, [open, props.children])

    return (
        <div
            ref={ref}
            className={`overflow-hidden transition-all duration-300 ${props.className || ''}`}
            style={{ maxHeight: height }}
            onClick={props.onClick}
        >
            <div ref={innerRef} className="flex flex-col gap-3 py-3">
                {props.children}
            </div>
        </div>
    )
})

export default AccordionContainer
export { IAccordionContainerProps }
