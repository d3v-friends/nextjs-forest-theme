import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { Color } from "../../../types";
interface Props {
    icon: StaticImageData;
    iconColor: Color;
    color: Color;
    className: string;
    children: ReactNode;
    label: ReactNode;
    right: ReactNode;
}
export default function ({ children, className, icon, color, iconColor, label, right, }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
