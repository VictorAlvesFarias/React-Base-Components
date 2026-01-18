import React, { LegacyRef, Ref, forwardRef } from "react";
import { useRef } from "react";

interface ITextAreaContainerProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    mask?: [RegExp, string]
    loading?: boolean
}

const TextAreaContainer = forwardRef((props: ITextAreaContainerProps, ref: Ref<HTMLTextAreaElement> | LegacyRef<HTMLTextAreaElement>) => {
    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    function handleRef(element: HTMLTextAreaElement | null) {
        internalRef.current = element;
        if (ref instanceof Function) {
            ref(element);
        }
    }

    function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.value = props.mask ? e.target.value.replace(/\D/g, '').replace(props.mask[0], props.mask[1]) : e.target.value;
        props?.onChange ? props.onChange(e) : null;
    }

    return (
        <div
            onClick={() => internalRef.current?.focus()}
            className={props.className}
            aria-disabled={props.disabled}
            aria-atomic={props.loading}
        >
            <textarea
                {...props}
                className="bg-transparent outline-none w-full h-full resize-none"
                placeholder={props.placeholder}
                ref={handleRef}
                onChange={handleOnChange}
            />
        </div>
    );
});

export {
    ITextAreaContainerProps,
    TextAreaContainer
}