import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    buttonText?: ReactNode;
    href?: string;
}
export default function ({ children, buttonText, href }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
