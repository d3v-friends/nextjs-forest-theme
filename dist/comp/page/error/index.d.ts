import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    error: Error;
    buttonText: ReactNode;
}
export default function ({ children, error, buttonText }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
