import React, { ReactNode } from "react";
import { DatePeriod, FnBase } from "nextjs-tools";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type" | "hidden" | "className"> {
    value: DatePeriod;
    onChange: FnBase<DatePeriod>;
    timezone?: string;
    label?: ReactNode;
    className?: string;
    format?: string;
    empty?: ReactNode;
    close?: ReactNode;
    reset?: ReactNode;
}
export default function ({ value, onChange, timezone, format, label, name, className, empty, close, reset, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
