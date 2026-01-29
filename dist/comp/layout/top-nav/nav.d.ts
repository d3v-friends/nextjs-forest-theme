import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    className?: string;
}
export default function ({ children, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
