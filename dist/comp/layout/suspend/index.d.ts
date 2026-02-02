import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
interface Props {
    pending: boolean;
    children?: ReactNode;
    image?: StaticImageData;
    wait?: number;
}
export default function ({ children, image, pending, wait }: Readonly<Props>): React.ReactPortal | null;
export {};
