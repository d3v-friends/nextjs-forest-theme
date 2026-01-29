import React, { ReactNode } from "react";
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "hidden"> {
    value: boolean;
    onChange: (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => void;
    label?: ReactNode;
}
export default function ({ name, value, onChange, children, label, className, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
