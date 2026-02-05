import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface AlertProps {
    children?: ReactNode;
    header?: ReactNode;
    buttonText?: ReactNode;
    onClose: FnVoid;
}
export default function ({ onClose, children, header, buttonText }: Readonly<Partial<AlertProps>>): import("react/jsx-runtime").JSX.Element;
export {};
