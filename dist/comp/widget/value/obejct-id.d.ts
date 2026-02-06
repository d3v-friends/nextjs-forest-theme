import React from "react";
import { StaticImageData } from "next/image";
import { Color } from "../../..";
interface Props extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
    children: string;
    icon?: StaticImageData;
    iconColor?: Color;
    copyable?: boolean;
}
export default function ({ children, ...opts }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
