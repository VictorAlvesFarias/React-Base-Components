interface IDropdownOptionValue {
    value: any;
    label: string;
}
interface IDropdownOptionContainerProps {
    value: any;
    label: string;
    className?: string;
    defaultValue?: boolean;
}
declare function DropdownOptionContainer(props: IDropdownOptionContainerProps): import("react/jsx-runtime").JSX.Element;
export { IDropdownOptionValue, IDropdownOptionContainerProps, DropdownOptionContainer };
