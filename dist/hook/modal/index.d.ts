import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
interface Attribute {
    backdrop: boolean;
    style: StyleType;
}
export type StyleType = "transparent" | "grayscale";
export type Modal = (onClose: FnVoid) => ReactNode;
type Wrapper = (children: ReactNode) => ReactNode;
type ModalFunction = (modal: Modal, attribute?: Partial<Attribute>) => void;
export default function (): [Wrapper, ModalFunction];
export {};
