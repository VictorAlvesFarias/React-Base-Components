interface IDropdownOptionValue {
    value: any;
    label: string;
}
interface IDropdownOptionContainerProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'defaultValue'> {
    value: any;
    label: string;
    defaultValue?: boolean;
}
declare function DropdownOptionContainer(props: IDropdownOptionContainerProps): import("react/jsx-runtime").JSX.Element;
export { IDropdownOptionValue, IDropdownOptionContainerProps, DropdownOptionContainer };
