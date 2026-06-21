import React, { createContext, forwardRef, useContext, useLayoutEffect, useRef, useState } from 'react'

export interface IAccordionContext {
    open: boolean
    setOpen: (value: boolean) => void
}

export interface IAccordionContextComponent {
    children: React.ReactNode
}

export interface IAccordionContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export interface IAccordionTitleContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export interface IAccordionDesactivateIconProps {
    children: React.ReactNode
}

export interface IAccordionActivateIconProps {
    children: React.ReactNode
}

export const AccordionContextObject = createContext<IAccordionContext>({
    open: false,
    setOpen: () => { },
})

export function AccordionContext({ children }: IAccordionContextComponent) {
    const [open, setOpen] = useState(false)

    return (
        <AccordionContextObject.Provider value={{ open, setOpen }}>
            {children}
        </AccordionContextObject.Provider>
    )
}

export function AccordionActivateIcon({ children }: IAccordionActivateIconProps) {
    const { open } = useContext(AccordionContextObject)
    return open ? <>{children}</> : null
}

export function AccordionDesactivateIcon({ children }: IAccordionDesactivateIconProps) {
    const { open } = useContext(AccordionContextObject)
    return !open ? <>{children}</> : null
}

export const AccordionContainer = forwardRef<HTMLDivElement, IAccordionContainerProps>(
    (props, ref) => {
        const { open } = useContext(AccordionContextObject)
        const containerRef = useRef<HTMLDivElement>(null)
        const [height, setHeight] = useState<number | 'auto'>(0)

        useLayoutEffect(() => {
            const el = containerRef.current
            if (!el) return

            if (open) {
                setHeight(el.scrollHeight)

                const handleTransitionEnd = () => setHeight('auto')
                el.addEventListener('transitionend', handleTransitionEnd, { once: true })
                return () => el.removeEventListener('transitionend', handleTransitionEnd)
            }

            if (height === 'auto') {
                setHeight(el.scrollHeight)
                requestAnimationFrame(() => setHeight(0))
            } else {
                setHeight(0)
            }
        }, [open])

        return (
            <div
                ref={containerRef}
                style={{ height: height === 'auto' ? 'auto' : `${height}px` }}
                className={`overflow-hidden transition-all duration-300 ${props.className ?? ''}`}
            >
                {props.children}
            </div>
        )
    }
)

export const AccordionTitleContainer = forwardRef<HTMLDivElement, IAccordionTitleContainerProps>(
    (props, ref) => {
        const { open, setOpen } = useContext(AccordionContextObject)

        function handleClick(e: React.MouseEvent<HTMLDivElement>) {
            setOpen(!open)
            props.onClick?.(e)
        }

        return (
            <div ref={ref} className={props.className} onClick={handleClick}>
                {props.children}
            </div>
        )
    }
)
