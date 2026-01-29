import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
}
export default function ({ children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
