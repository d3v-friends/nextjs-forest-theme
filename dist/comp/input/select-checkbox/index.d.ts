import React, { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "hidden"> {
    items: SelectCheckboxItem[];
    value: string[];
    onChange: FnBase<string[]>;
    label?: ReactNode;
}
export interface SelectCheckboxItem {
    label: ReactNode;
    value: string;
}
export default function ({ items, value, onChange, className, label, name, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
