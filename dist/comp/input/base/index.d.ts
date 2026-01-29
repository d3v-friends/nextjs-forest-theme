import React, { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
export interface Props extends InputProps, InvalidMessageProps {
    value: string;
    onChange: FnBase<string>;
    onChangeInterceptor?: (e: React.ChangeEvent<HTMLInputElement>) => string;
    label?: ReactNode;
    children?: ReactNode;
}
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;
export default function ({ className, value, onChange, onChangeInterceptor, label, invalidMessage, regexp, children, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
interface InvalidMessageProps {
    regexp?: RegExp | string;
    invalidMessage?: ReactNode;
}
export {};
