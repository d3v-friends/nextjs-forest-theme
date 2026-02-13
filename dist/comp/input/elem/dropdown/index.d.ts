import React, { ReactNode } from "react";
interface Props<T extends string> {
    items: DropdownItem<T>[];
    value: T;
    onChange: (value: T) => void;
    className: string;
}
export interface DropdownItem<T> {
    label: ReactNode;
    value: T;
}
export default function <T extends string>({ items, value, onChange, className, }: Readonly<Partial<Props<T>>>): React.ReactNode;
export {};
