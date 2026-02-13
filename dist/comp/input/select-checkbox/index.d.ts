import React, { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
interface Props<T extends string> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "hidden"> {
    items: SelectCheckboxItem<T>[];
    value: T[];
    onChange: FnBase<T[]>;
    label?: ReactNode;
    wrapper?: (children: ReactNode) => ReactNode;
}
export interface SelectCheckboxItem<T extends string> {
    label: ReactNode;
    value: T;
}
export default function <T extends string>({ items, value, onChange, className, label, name, wrapper, ...attr }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
