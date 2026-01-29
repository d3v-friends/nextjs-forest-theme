import { ReactNode } from "react";
import { Color } from "../../../types";
interface Props {
    children: ReactNode;
    className: string;
    color: Color;
    right: ReactNode;
}
export default function ({ children, className, color, right }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
