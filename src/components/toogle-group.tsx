import React, { createContext, forwardRef, useContext, useImperativeHandle, useState } from 'react'

export interface IToggleGroupContext {
    value: string | null
    setValue: (value: string) => void
}

export interface IToggleGroupController {
    getValue: () => string | null
    setValue: (value: string) => void
    clear: () => void
}

export interface IToggleGroupContextComponent {
    children: React.ReactNode
    value?: string | null
    onChange?: (value: string) => void
}

export interface IToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}

const ToggleGroupContextObject = createContext<IToggleGroupContext>({
    value: null,
    setValue: () => { },
})

export const ToggleGroupContext = forwardRef<IToggleGroupController, IToggleGroupContextComponent>(
    ({ children, value: initialValue = null, onChange }, ref) => {
        const [value, setValue] = useState<string | null>(initialValue ?? null)

        function handleSetValue(next: string) {
            setValue(next)
            onChange?.(next)
        }

        useImperativeHandle(ref, () => ({
            getValue: () => value,
            setValue: handleSetValue,
            clear: () => setValue(null),
        }))

        return (
            <ToggleGroupContextObject.Provider value={{ value, setValue: handleSetValue }}>
                {children}
            </ToggleGroupContextObject.Provider>
        )
    }
)

ToggleGroupContext.displayName = 'ToggleGroupContext'

export const ToggleGroupItem = forwardRef<HTMLButtonElement, IToggleGroupItemProps>(
    (props, ref) => {
        const { value: activeValue, setValue } = useContext(ToggleGroupContextObject)
        const isActive = activeValue === props.value

        function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
            setValue(props.value)
            props.onClick?.(e)
        }

        return (
            <button
                ref={ref}
                type="button"
                aria-pressed={isActive}
                {...props}
                onClick={handleClick}
            >
                {props.children}
            </button>
        )
    }
)

ToggleGroupItem.displayName = 'ToggleGroupItem'