import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { createContext, useState as useStateReact } from "react"

interface IModalContextType {
    setOpen: (e: boolean) => any
    open: boolean
}

interface IModalContextComponent {
    children: React.ReactNode[] | React.ReactNode
    externalControl?: boolean
    initialOpen?: boolean
}

interface IModalController {
    open: () => void
    close: () => void
    toggle: () => void
    isOpen: () => boolean
}

const ModalContext = forwardRef<IModalController, IModalContextComponent>((props, ref: any) => {
    const [open, setOpen] = useStateReact<boolean>(props.initialOpen || false)

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false),
        toggle: () => setOpen(!open),
        isOpen: () => open
    }))

    const context: IModalContextType = {
        setOpen: (e) => { setOpen(e) },
        open: open
    }

    return <ModalContextObject.Provider value={context} children={props.children} />
})

ModalContext.displayName = 'ModalContext'

const ModalContextObject = createContext<IModalContextType>({
    open: false,
    setOpen: () => { }
});

export {
    ModalContextObject,
    ModalContext,
    IModalController
}