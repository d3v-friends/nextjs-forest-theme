import React, { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
type OkCancelFC = (onClose: FnVoid) => ReactNode;
export type OkCancelChildren = OkCancelFC | ReactNode;
export interface OkCancelOptions {
    backdrop: boolean;
    escape: boolean;
    enter: boolean;
    header: ReactNode;
    onClickOk: React.MouseEventHandler<HTMLButtonElement>;
    onClickCancel: React.MouseEventHandler<HTMLButtonElement>;
    okButton: ReactNode;
    cancelButton: ReactNode;
}
export default function (children: OkCancelChildren, opts?: Partial<OkCancelOptions>): void;
export {};
