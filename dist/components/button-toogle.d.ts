import { default as React } from 'react';
export interface IToggleContext {
    active: boolean;
    setActive: (value: boolean) => void;
}
export interface IToggleController {
    activate: () => void;
    deactivate: () => void;
    toggle: () => void;
    isActive: () => boolean;
}
export interface IToggleContextComponent {
    children: React.ReactNode;
    initialActive?: boolean;
    onChange?: (active: boolean) => void;
}
export interface IToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export interface IToggleActivateIconProps {
    children: React.ReactNode;
}
export interface IToggleDeactivateIconProps {
    children: React.ReactNode;
}
export declare const ToggleContext: React.ForwardRefExoticComponent<IToggleContextComponent & React.RefAttributes<IToggleController>>;
export declare const ToggleButton: React.ForwardRefExoticComponent<IToggleButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare function ToggleActivateIcon({ children }: IToggleActivateIconProps): import("react/jsx-runtime").JSX.Element | null;
export declare function ToggleDeactivateIcon({ children }: IToggleDeactivateIconProps): import("react/jsx-runtime").JSX.Element | null;
