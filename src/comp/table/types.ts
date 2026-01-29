import React, {ReactNode} from "react";

export interface TableItem<T> {
	// thead
	label: ReactNode;
	// sort
	key: string;
	// style
	classNames: Partial<TableClass>;
	// row
	row: RowParser<T>;
}

export type OnMouseUpTable<T> = (e: React.MouseEvent<HTMLTableRowElement>, row: T) => void;

export type RowParser<T> = (value: T) => ReactNode;

export interface TableClass {
	thead: string;
	tbody: string;
}

export type TableSort = "asc" | "desc" | "none";

export function getSorter(str: string): TableSort {
	switch (str.toLowerCase()) {
		case "asc":
			return "asc";
		case "desc":
			return "desc";
		default:
			return "none";
	}
}

export function toggleSort(v: TableSort): TableSort {
	switch (v) {
		case "asc":
			return "desc";
		case "desc":
			return "none";
		case "none":
			return "asc";
		default:
			return "asc";
	}
}
