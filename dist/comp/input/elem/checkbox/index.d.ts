import React from "react";
interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value" | "type"> {
    value: boolean;
    onChange: (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => void;
}
export default function ({ value, children, onChange, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
