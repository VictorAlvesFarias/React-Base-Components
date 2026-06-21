import { default as React } from 'react';
export interface IToggleGroupContext {
    value: string | null;
    setValue: (value: string) => void;
}
export interface IToggleGroupController {
    getValue: () => string | null;
    setValue: (value: string) => void;
    clear: () => void;
}
export interface IToggleGroupContextComponent {
    children: React.ReactNode;
    value?: string | null;
    onChange?: (value: string) => void;
}
export interface IToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
export declare const ToggleGroupContext: React.ForwardRefExoticComponent<IToggleGroupContextComponent & React.RefAttributes<IToggleGroupController>>;
export declare const ToggleGroupItem: React.ForwardRefExoticComponent<IToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
