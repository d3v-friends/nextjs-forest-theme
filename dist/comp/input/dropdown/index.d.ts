import React, { ReactNode } from "react";
import { DropdownItem } from "../elem/dropdown";
import { FnBase } from "nextjs-tools";
interface Props<T extends string> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "hidden"> {
    value: string;
    onChange: FnBase<string>;
    items: DropdownItem<T>[];
    label?: ReactNode;
}
export default function <T extends string>({ value, items, onChange, label, className, name, ...attr }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
