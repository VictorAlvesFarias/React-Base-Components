import React, { createContext, useContext, useState } from 'react'
import { AccordionContextObject } from './accordion'

export interface ISidebarContext {
  open: boolean
  setOpen: (value: boolean) => void
  selected: string
}

export interface ISidebarContextComponent {
  children: React.ReactNode
  getPathname?: () => string
}

export interface ISidebarHamburguerContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export interface ISidebarItemContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'unselectable'> {
  href?: string
  selected?: string
  menu?: boolean
  unselectable?: boolean
  redirect?: (href: string) => string
  disable?: boolean
  commons?: string[]
}

export interface IMenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const SidebarContextObject = createContext<ISidebarContext>({
  open: true,
  setOpen: () => { },
  selected: '',
})

export function SidebarContext({ children, getPathname }: ISidebarContextComponent) {
  const [open, setOpen] = useState(false)
  const selected = getPathname?.() ?? ''

  return (
    <SidebarContextObject.Provider value={{ open, setOpen, selected }}>
      {children}
    </SidebarContextObject.Provider>
  )
}

export function SidebarHamburguerContainer({ className, children }: ISidebarHamburguerContainerProps) {
  const { open, setOpen } = useContext(SidebarContextObject)

  return (
    <div onClick={() => setOpen(!open)} className={className}>
      {children}
    </div>
  )
}

export function SidebarItemContainer(props: ISidebarItemContainerProps) {
  const { selected } = useContext(SidebarContextObject)
  const { open, setOpen } = useContext(AccordionContextObject)

  function handleIsSelected() {
    if (props.href) {
      return !props.unselectable && !!selected?.includes(props.href)
    }

    if (props.commons && selected) {
      return props.commons.some((path) => selected.includes(path))
    }

    return false
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    props.onClick?.(e)
    if (props.redirect) {
      props.redirect(props.href ?? '')
    }
  }

  if (props.disable) {
    return (
      <div
        aria-selected={handleIsSelected()}
        aria-checked={open && props.menu === true}
        className={props.className}
      >
        {props.children}
      </div>
    )
  }

  return (
    <div
      onClick={handleClick}
      aria-selected={handleIsSelected()}
      aria-checked={open}
      className={props.className}
    >
      {props.children}
    </div>
  )
}

export function MenuContainer({ className, children }: IMenuContainerProps) {
  const { open, setOpen } = useContext(SidebarContextObject)

  return (
    <>
      <div aria-checked={open} className={`md:flex hidden overflow-y-auto ${className ?? ''}`}>
        {children}
      </div>

      <div aria-checked={open} className="md:hidden fixed z-50 w-full flex top-0 h-screen transition-all duration-500 aria-checked:right-0 right-full">
        <div className={`flex overflow-y-auto md:hidden ${className ?? ''}`} role="dialog" aria-modal="true">
          {children}
        </div>
        <div className="flex-1 pr-12 w-full h-full" onClick={() => setOpen(false)} />
      </div>

      <div aria-checked={open} className="flex-1 pr-12 z-40 fixed flex md:hidden top-0 h-full w-full aria-checked:delay-0 delay-500 aria-checked:right-0 right-full">
        <div aria-checked={open} className="flex-1 pr-12 fixed blur-sm h-full w-full bg-black transition-all duration-500 aria-checked:bg-opacity-30 bg-opacity-0" />
      </div>
    </>
  )
}
