import { ReactNode } from "react";
interface Props {
    show: boolean;
    children: ReactNode;
    delay: number;
}
export default function ({ show: init, children, delay }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element | null;
export {};
