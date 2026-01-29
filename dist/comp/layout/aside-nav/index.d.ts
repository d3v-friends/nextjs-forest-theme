import { ReactNode } from "react";
import { StaticImageData } from "next/image";
interface Props {
    aside: AsideSector[];
    children: ReactNode;
    header?: ReactNode;
}
export interface AsideSector {
    title: ReactNode;
    links: AsideSectorLink[];
}
export interface AsideSectorLink {
    href: string;
    label: ReactNode;
    icon: StaticImageData;
}
export default function (props: Readonly<Partial<Props>>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
