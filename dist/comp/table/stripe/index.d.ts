import React, { ReactNode } from "react";
interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: ReactNode[];
}
export default function ({ children, className, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
