import React, { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Props extends Omit<React.HTMLAttributes<HTMLButtonElement>, "children" | "onClick"> {
    logo: ReactNode;
    items: TopNavItem[];
}
type LabelFC = (onClose: FnVoid) => ReactNode;
export interface TopNavItem {
    label: ReactNode | LabelFC;
    href?: string;
}
export default function ({ className, items, logo, ...opts }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
