import React, { ReactNode } from "react";
export interface TableItem<T> {
    label: ReactNode;
    key: string;
    classNames: Partial<TableClass>;
    row: RowParser<T>;
}
export type OnMouseUpTable<T> = (e: React.MouseEvent<HTMLTableRowElement>, row: T) => void;
export type RowParser<T> = (value: T) => ReactNode;
export interface TableClass {
    thead: string;
    tbody: string;
}
export type TableSort = "asc" | "desc" | "none";
export declare function getSorter(str: string): TableSort;
export declare function toggleSort(v: TableSort): TableSort;
