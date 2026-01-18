import React, { LegacyRef, Ref, forwardRef, useEffect, useRef, useState } from "react"

interface ICheckboxContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: any, i?: any) => any
    data: any
}

const CheckboxContainer = forwardRef((props: ICheckboxContainerProps, ref: Ref<HTMLInputElement> | LegacyRef<HTMLInputElement>) => {
    const internalRef = useRef<HTMLInputElement | null>(null);
    const [checked, setChecked] = useState(false)

    function handleRef(element: HTMLInputElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement> | any) {
        if (!props.disabled && (props.value == null || props.value == undefined)) {
            if (!checked) {
                e.target.value = true
            }
            else {
                e.target.value = false
            }

            props?.onChange ? props.onChange(e, props.data) : null
            setChecked(!checked)
        }
        else if (!props.disabled && (props.value != null && props.value != undefined)) {
            props?.onChange ? props.onChange(e, props.data) : null
        }
    }

    useEffect(() => {
        setChecked(internalRef.current?.value == "true")
    }, [internalRef.current?.value])

    useEffect(() => {
        setChecked(props.value)
    }, [props.value])

    return (
        <label aria-checked={checked} className={props.className}>
            <input
                {...props}
                children={null}
                className='hidden'
                ref={handleRef}
                onClick={handleOnChange}
            />
            {checked && props.children}
        </label>
    )
})

export {
    ICheckboxContainerProps,
    CheckboxContainer
}