import React, { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
type AlertFC = (onClose: FnVoid) => ReactNode;
export type AlertChildren = AlertFC | ReactNode;
export interface AlertOptions {
    backdrop: boolean;
    escape: boolean;
    header: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    button: ReactNode;
}
export default function (children?: AlertChildren, opts?: Partial<AlertOptions>): void;
export {};
