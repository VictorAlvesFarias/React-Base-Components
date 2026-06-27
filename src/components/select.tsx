import React, { createContext, forwardRef, useContext, useEffect, useRef, useState } from 'react'

export interface ISelectOptionValue {
    value: any
    label: string
}

export interface ISelectOptionContainerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'defaultValue'> {
    value: any
    label: string
    defaultValue?: boolean
}

export interface ISelectMenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    onValueChange?: (_: ISelectOptionValue) => void
    children: React.ReactElement<ISelectOptionValue> | React.ReactElement<ISelectOptionValue>[]
}

export interface ISelectRootContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactElement<ISelectMenuContainerProps>
}

export interface SelectContextType {
    open: boolean
    setOpen: (value: boolean) => void
    filter: string
    setFilter: (value: string) => void
    selected: ISelectOptionValue | null
    setSelected: (value: ISelectOptionValue | null) => void
    options: ISelectOptionValue[]
    setOption: (value: ISelectOptionValue) => void
    externalValue: any
    setExternalValue: (value: any) => void
}

export interface SelectContextComponent {
    children: React.ReactNode
    onChange?: (value: any) => void
}

export const SelectContextObject = createContext<SelectContextType>({
    open: false,
    setOpen: () => { },
    filter: '',
    setFilter: () => { },
    selected: null,
    setSelected: () => { },
    options: [],
    setOption: () => { },
    externalValue: null,
    setExternalValue: () => { },
})

export const SelectRootContainer = forwardRef<HTMLInputElement, ISelectRootContainerProps>(
    (props, ref) => {
        const { open, setOpen, selected, setSelected, filter, setFilter, setExternalValue } =
            useContext(SelectContextObject)

        const internalRef = useRef<HTMLInputElement | null>(null)
        const helperInputRef = useRef<HTMLInputElement | null>(null)
        const { children, ...inputProps } = props

        function handleRef(element: HTMLInputElement | null) {
            if (typeof ref === 'function') ref(element)
            else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = element
            internalRef.current = element
        }

        function handleOnChangeFilter(e: React.ChangeEvent<HTMLInputElement>) {
            setSelected(null)
            setFilter(e.target.value)

            if (internalRef.current) {
                internalRef.current.value = ''
                if (typeof ref === 'function') ref(internalRef.current)
            }
        }

        function handleClick() {
            setOpen(true)
            helperInputRef.current?.focus()
        }

        // Lê direto de props.value (não de inputProps) para evitar que o
        // HTMLInputElement serialize o número como string antes de chegar aqui.
        // Assim o valor original (ex: number 3) chega intacto ao contexto.
        useEffect(() => {
            setExternalValue(props.value ?? null)
        }, [props.value])

        return (
            <>
                <div className="w-full relative">
                    <div
                        aria-disabled={props.disabled}
                        className={`${props.className ?? ''} z-[9] relative`}
                        onClick={props.disabled ? undefined : handleClick}
                    >
                        <input
                            ref={helperInputRef}
                            className="bg-transparent outline-none w-full"
                            type="text"
                            disabled={props.disabled}
                            onChange={handleOnChangeFilter}
                            value={selected?.label ? selected.label : filter}
                            placeholder={props.placeholder}
                        />
                        <input
                            {...inputProps}
                            aria-hidden={!!inputProps.value && inputProps.value !== ''}
                            className="bg-transparent outline-none w-0"
                            disabled={props.disabled}
                            value={inputProps.value ?? ''}
                            ref={handleRef}
                            onChange={(e) => inputProps.onChange?.(e)}
                        />
                    </div>

                    <div aria-hidden={!open} className="absolute w-full h-full aria-hidden:hidden z-[12]">
                        {children}
                    </div>
                </div>

                <div
                    aria-hidden={!open}
                    onClick={() => setOpen(!open)}
                    className="z-[10] fixed w-full top-0 left-0 h-full aria-hidden:hidden"
                />
            </>
        )
    }
)

export function SelectContext({ children, onChange }: SelectContextComponent) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<ISelectOptionValue | null>(null)
    const [filter, setFilter] = useState('')
    const [options, setOptions] = useState<ISelectOptionValue[]>([])
    const [externalValue, setExternalValue] = useState<any>(null)

    function handleSetSelected(value: ISelectOptionValue | null) {
        onChange?.(value?.value)
        setSelected(value)
    }

    function handleAddOption(item: ISelectOptionValue) {
        setOptions((prev) => [...prev, item])
    }

    return (
        <SelectContextObject.Provider
            value={{
                open,
                setOpen,
                filter,
                setFilter,
                selected,
                setSelected: handleSetSelected,
                options,
                setOption: handleAddOption,
                externalValue,
                setExternalValue,
            }}
        >
            {children}
        </SelectContextObject.Provider>
    )
}

export function SelectOptionContainer(props: ISelectOptionContainerProps) {
    const { setOpen, setSelected, selected, setFilter, setOption } = useContext(SelectContextObject)
    const addedRef = useRef(false)

    function handleSetOption() {
        setSelected({ label: props.label, value: props.value })
        setFilter('')
        setOpen(false)
    }

    useEffect(() => {
        if (!addedRef.current) {
            addedRef.current = true
            setOption({ label: props.label, value: props.value })
        }

        if (selected?.value === props.value) {
            setSelected({ label: props.label, value: props.value })
            setFilter('')
        }
    }, [])

    return (
        <span onClick={handleSetOption} className={props.className}>
            {props.label}
        </span>
    )
}

export function SelectMenuContainer(props: ISelectMenuContainerProps) {
    const { filter, externalValue, setSelected } = useContext(SelectContextObject)
    const items = Array.isArray(props.children) ? props.children : [props.children]

    useEffect(() => {
        if (externalValue != null && externalValue !== '') {
            // Compara como string para neutralizar a diferença entre
            // number (vindo da prop original) e string (serializado pelo RHF/HTML).
            // Ex: e.props.value = 3, externalValue = "3" → ambos viram "3" ✓
            const match = items.find((e) => String(e.props.value) === String(externalValue))
            if (match) {
                setSelected({ value: match.props.value, label: match.props.label })
            }
        } else {
            setSelected(null)
        }
    }, [externalValue, items.length])

    return (
        <div className={`w-full flex flex-col ${props.className ?? ''}`}>
            {items.filter((e) =>
                e.props.label.toLowerCase().includes(filter.toLowerCase())
            )}
        </div>
    )
}