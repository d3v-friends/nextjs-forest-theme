import { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
type ModalFC = (onClose: FnVoid) => ReactNode;
export type ModalChildren = ModalFC | ReactNode;
export interface ModalOptions {
    backdrop: boolean;
    escape: boolean;
}
export default function (children: ModalFC | ReactNode, opts?: Partial<ModalOptions>): void;
export {};
