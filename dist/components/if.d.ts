import { default as React } from 'react';
export interface ConditionalGroupProps {
    children: React.ReactNode;
}
export interface IIfProps {
    conditional: boolean | undefined | null;
    children: React.ReactNode;
}
export interface IElseIfProps {
    conditional: boolean | undefined | null;
    children: React.ReactNode;
}
export interface IElseProps {
    children: React.ReactNode;
}
export declare function ConditionalGroup({ children }: ConditionalGroupProps): import("react/jsx-runtime").JSX.Element | null;
export declare function If({ conditional, children }: IIfProps): import("react/jsx-runtime").JSX.Element | null;
export declare function ElseIf({ children }: IElseIfProps): import("react/jsx-runtime").JSX.Element;
export declare function Else({ children }: IElseProps): import("react/jsx-runtime").JSX.Element;
