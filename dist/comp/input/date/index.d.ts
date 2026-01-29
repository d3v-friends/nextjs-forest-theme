import React, { ReactNode } from "react";
import { FnBase, Nullable } from "nextjs-tools";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type" | "hidden" | "className"> {
    value: Nullable<Date>;
    onChange: FnBase<Nullable<Date>>;
    label?: ReactNode;
    format?: string;
    timezone?: string;
    className?: string;
    close?: ReactNode;
    reset?: ReactNode;
    empty?: ReactNode;
}
export default function ({ value, onChange, label, children, name, format, timezone, className, close, reset, empty, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
