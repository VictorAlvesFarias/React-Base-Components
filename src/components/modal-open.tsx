import React, { useContext } from 'react'
import { ModalContextObject } from './modal-context'

interface IModalOpenProps extends React.HTMLAttributes<HTMLDivElement> {
    callback?: (e: any) => any
}

function ModalOpen(_: IModalOpenProps) {
    const { setOpen } = useContext(ModalContextObject)

    function handleOpen(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setOpen(true)
        _.callback ? (e) : null
    }

    return (
        <div onClick={handleOpen} className={_.className}>
            {_.children}
        </div>
    )
}

export {
    IModalOpenProps,
    ModalOpen
}