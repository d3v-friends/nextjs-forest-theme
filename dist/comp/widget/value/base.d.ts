import React from "react";
import { StaticImageData } from "next/image";
import { Color } from "../../../types";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    icon?: StaticImageData;
    iconColor?: Color;
    text?: string;
    copyable?: boolean;
}
export default function ({ children, icon, iconColor, copyable, text, ...opts }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
