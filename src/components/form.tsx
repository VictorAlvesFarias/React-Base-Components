import React, { FormEvent, forwardRef, LegacyRef, Ref, useRef } from 'react'
interface IFormContainerProps extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit: (e: any) => any
}

const FormContainer = forwardRef((props: IFormContainerProps, ref:  Ref<HTMLFormElement> | LegacyRef<HTMLFormElement>) => {
    const internalRef = useRef<HTMLFormElement | null>(null);

    function handleRef(element: HTMLFormElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    };

    function handleOnSubmit(event: FormEvent) {
        event.preventDefault()
        if (props.onSubmit) {
            props.onSubmit(event)
        }
    }

    return (
        <form ref={handleRef} id={props.id} className={props.className} onSubmit={handleOnSubmit} >
            {props.children}
        </form>
    )
})

export {
    IFormContainerProps,
    FormContainer
}