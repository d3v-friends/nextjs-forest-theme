import { ReactNode } from "react";
import { Color } from "../../types";
import { FnVoid } from "nextjs-tools";
type ToastFC = (onClose: FnVoid) => ReactNode;
export interface ToastOptions {
    color: Color;
    autoClose: boolean;
    timeout: number;
    topOffset: string;
    maxWidth: number | string;
}
export default function (children: ToastFC | ReactNode, { topOffset, ...opts }?: Partial<ToastOptions>): void;
export {};
