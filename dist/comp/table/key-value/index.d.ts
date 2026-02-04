import { ReactNode } from "react";
interface Props {
    items: KeyValueItem[];
}
export interface KeyValueItem {
    label: ReactNode;
    value: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
}
export default function ({ items }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element[];
export {};
