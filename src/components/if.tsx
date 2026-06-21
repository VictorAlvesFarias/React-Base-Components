import React, { createContext, useContext } from 'react'

export interface ConditionalGroupProps {
    children: React.ReactNode
}

export interface IIfProps {
    conditional: boolean | undefined | null
    children: React.ReactNode
}

export interface IElseIfProps {
    conditional: boolean | undefined | null
    children: React.ReactNode
}

export interface IElseProps {
    children: React.ReactNode
}

const ConditionalGroupContextObject = createContext<boolean>(false)

export function ConditionalGroup({ children }: ConditionalGroupProps) {
    const kids = React.Children.toArray(children)

    for (const child of kids) {
        if (!React.isValidElement(child)) {
            continue
        }

        if (child.type === Else) {
            continue
        }

        if (child.type === If) {
            const ifElement = child as React.ReactElement<IIfProps>

            if (ifElement.props.conditional) {
                return (
                    <ConditionalGroupContextObject.Provider value={true}>
                        {child}
                    </ConditionalGroupContextObject.Provider>
                )
            }

        }
    }

    const elseChild = kids.find(
        (child) => React.isValidElement(child) && child.type === Else
    )

    if (elseChild) {
        return <>{elseChild}</>
    }

    return null
}

export function If({ conditional, children }: IIfProps) {
    const insideGroup = useContext(ConditionalGroupContextObject)

    if (insideGroup) {
        return <>{children}</>
    }  

    if (conditional) {
        return <>{children}</>
    }

    return null
}

export function ElseIf({ children }: IElseIfProps) {
    return <>{children}</>
}

export function Else({ children }: IElseProps) {
    return <>{children}</>
}