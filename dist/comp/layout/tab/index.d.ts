import { ReactNode } from "react";
import { StaticImageData } from "next/image";
interface Props {
    items?: TabItem[];
    children?: ReactNode;
    className?: string;
}
export interface TabItem {
    label: ReactNode;
    href: string;
    icon?: StaticImageData;
}
export default function ({ items, children, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
