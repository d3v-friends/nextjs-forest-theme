import React, { ReactNode } from "react";
interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: string | number;
    copyable?: boolean;
    thousandSeparator?: boolean;
    suffix?: ReactNode;
}
export default function ({ children, thousandSeparator, suffix, ...opts }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
