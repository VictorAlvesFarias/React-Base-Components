import React, { useContext, useEffect, useState } from 'react'
import { ModalContextObject } from './modal-context'

interface IModalCloseProps extends React.HTMLAttributes<HTMLDivElement> {
    open?: boolean
    callback?: (e: any) => any
}

function ModalClose(props: IModalCloseProps) {
    const { setOpen } = useContext(ModalContextObject)

    function handleOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setOpen(false)
        props.callback ? props.callback(e) : null
    }

    return (
        <div onClick={handleOpen} className={props.className}>

            {props.children}
        </div>
    )
}

export {
    IModalCloseProps,
    ModalClose
}