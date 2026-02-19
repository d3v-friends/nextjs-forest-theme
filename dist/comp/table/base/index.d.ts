import { ReactNode } from "react";
import { OnMouseUpTable, TableItem } from "../types";
interface Props<T> {
    columns: Partial<TableItem<T>>[];
    list: T[];
    className: string;
    onClick: OnMouseUpTable<T>;
    onMiddleClick: OnMouseUpTable<T>;
    emptyChildren: ReactNode;
}
export default function <T>({ columns, list, className, onClick, onMiddleClick, emptyChildren, }: Readonly<Partial<Props<T>>>): import("react/jsx-runtime").JSX.Element;
export {};
