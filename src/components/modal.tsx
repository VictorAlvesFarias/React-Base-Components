import React, { createContext, forwardRef, useContext, useImperativeHandle, useState } from 'react'

export interface IModalContextType {
  open: boolean
  setOpen: (value: boolean) => void
}

export interface IModalController {
  open: () => void
  close: () => void
  toggle: () => void
  isOpen: () => boolean
}

export interface IModalContextComponent {
  children: React.ReactNode
  externalControl?: boolean
  initialOpen?: boolean
}

export interface IModalOpenProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface IModalCloseProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface IModalRootContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  callback?: () => void
}

export const ModalContextObject = createContext<IModalContextType>({
  open: false,
  setOpen: () => { },
})

export const ModalContext = forwardRef<IModalController, IModalContextComponent>(
  ({ children, initialOpen = false }, ref) => {
    const [open, setOpen] = useState(initialOpen)

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((prev) => !prev),
      isOpen: () => open,
    }))

    return (
      <ModalContextObject.Provider value={{ open, setOpen }}>
        {children}
      </ModalContextObject.Provider>
    )
  }
)

export function ModalOpen({ callback, className, children }: IModalOpenProps) {
  const { setOpen } = useContext(ModalContextObject)

  function handleOpen(e: React.MouseEvent<HTMLDivElement>) {
    setOpen(true)
    callback?.(e)
  }

  return (
    <div onClick={handleOpen} className={className}>
      {children}
    </div>
  )
}

export function ModalClose({ callback, className, children }: IModalCloseProps) {
  const { setOpen } = useContext(ModalContextObject)

  function handleClose(e: React.MouseEvent<HTMLDivElement>) {
    setOpen(false)
    callback?.(e)
  }

  return (
    <div onClick={handleClose} className={className}>
      {children}
    </div>
  )
}

export function ModalRootContainer({ className, children }: IModalRootContainerProps) {
  const { open } = useContext(ModalContextObject)

  return open ? (
    <div className={`${className ?? ''} z-50 w-full top-0 left-0 h-screen fixed flex`}>
      {children}
    </div>
  ) : null
}
