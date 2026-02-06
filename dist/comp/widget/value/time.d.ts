import React from "react";
interface Props extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
    children: string | Date;
    timezone?: string;
    copyable?: boolean;
    format?: string;
    locale?: string;
}
export default function ({ children, timezone, format, locale, ...opts }: Readonly<Props>): string | import("react/jsx-runtime").JSX.Element;
export {};
