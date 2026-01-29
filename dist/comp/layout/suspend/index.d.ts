import React, { ReactNode } from "react";
interface Props {
    pending: boolean;
    children?: ReactNode;
    wait?: number;
}
export default function ({ children, pending, wait }: Readonly<Props>): React.ReactPortal | null;
export {};
