import React, { ReactNode } from "react";
interface Props {
    items: DropdownItem[];
    value: string;
    onChange: (value: string) => void;
    className: string;
}
export interface DropdownItem {
    label: ReactNode;
    value: string;
}
export default function ({ items, value, onChange, className }: Readonly<Partial<Props>>): React.ReactNode;
export {};
