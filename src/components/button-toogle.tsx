import React, { createContext, forwardRef, useContext, useImperativeHandle, useState } from 'react'

export interface IToggleContext {
    active: boolean
    setActive: (value: boolean) => void
}

export interface IToggleController {
    activate: () => void
    deactivate: () => void
    toggle: () => void
    isActive: () => boolean
}

export interface IToggleContextComponent {
    children: React.ReactNode
    initialActive?: boolean
    onChange?: (active: boolean) => void
}

export interface IToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export interface IToggleActivateIconProps {
    children: React.ReactNode
}

export interface IToggleDeactivateIconProps {
    children: React.ReactNode
}

const ToggleContextObject = createContext<IToggleContext>({
    active: false,
    setActive: () => { },
})

export const ToggleContext = forwardRef<IToggleController, IToggleContextComponent>(
    ({ children, initialActive = false, onChange }, ref) => {
        const [active, setActive] = useState(initialActive)

        function handleSetActive(value: boolean) {
            setActive(value)
            onChange?.(value)
        }

        useImperativeHandle(ref, () => ({
            activate: () => handleSetActive(true),
            deactivate: () => handleSetActive(false),
            toggle: () => handleSetActive(!active),
            isActive: () => active,
        }))

        return (
            <ToggleContextObject.Provider value={{ active, setActive: handleSetActive }}>
                {children}
            </ToggleContextObject.Provider>
        )
    }
)

ToggleContext.displayName = 'ToggleContext'

export const ToggleButton = forwardRef<HTMLButtonElement, IToggleButtonProps>(
    (props, ref) => {
        const { active, setActive } = useContext(ToggleContextObject)

        function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
            setActive(!active)
            props.onClick?.(e)
        }

        return (
            <button
                ref={ref}
                type="button"
                aria-pressed={active}
                {...props}
                onClick={handleClick}
            >
                {props.children}
            </button>
        )
    }
)

ToggleButton.displayName = 'ToggleButton'

export function ToggleActivateIcon({ children }: IToggleActivateIconProps) {
    const { active } = useContext(ToggleContextObject)
    return active ? <>{children}</> : null
}

export function ToggleDeactivateIcon({ children }: IToggleDeactivateIconProps) {
    const { active } = useContext(ToggleContextObject)
    return !active ? <>{children}</> : null
}