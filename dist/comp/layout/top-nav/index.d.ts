import { ReactNode } from "react";
interface Props {
    nav?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
}
export default function ({ nav, children, footer }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
