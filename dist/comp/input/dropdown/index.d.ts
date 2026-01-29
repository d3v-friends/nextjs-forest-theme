import React, { ReactNode } from "react";
import { DropdownItem } from "../elem/dropdown";
import { FnBase } from "nextjs-tools";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "hidden"> {
    value: string;
    onChange: FnBase<string>;
    items: DropdownItem[];
    label?: ReactNode;
}
export default function ({ value, items, onChange, label, className, name, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
