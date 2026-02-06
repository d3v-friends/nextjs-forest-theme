import { ReactNode } from "react";
import { Color } from "../../../types";
interface Props<T> {
    value: T;
    items: EnumItem<T>[];
}
export interface EnumItem<T> {
    label: ReactNode;
    value: T;
    color: Color;
}
export default function <T>({ value, items }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
