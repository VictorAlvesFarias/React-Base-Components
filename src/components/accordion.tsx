import React, { forwardRef, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AccordionContextObject } from './accordion-context'

interface IAccordionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

const AccordionContainer = forwardRef<HTMLDivElement, IAccordionContainerProps>((props, ref) => {
    const { open } = useContext(AccordionContextObject)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number | 'auto'>(0)

    useLayoutEffect(() => {
        const el = containerRef.current

        if (!el) return

        if (open) {
            setHeight(el.scrollHeight)

            const handleTransitionEnd = () => {
                setHeight('auto')
            }

            el.addEventListener('transitionend', handleTransitionEnd, { once: true })

            return () => {
                el.removeEventListener('transitionend', handleTransitionEnd)
            }
        }

        if (height === 'auto') {
            setHeight(el.scrollHeight)

            requestAnimationFrame(() => {
                setHeight(0)
            })
        } else {
            setHeight(0)
        }
    }, [open])

    return (
        <div
            ref={containerRef}
            style={{
                height: height === 'auto' ? 'auto' : `${height}px`
            }}
            className={`overflow-hidden transition-all duration-300 ${props.className || ''}`}
        >
            {props.children}
        </div>
    )
})

export {
    IAccordionContainerProps,
    AccordionContainer
}
