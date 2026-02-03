import React, { ReactNode } from "react";
import { FnVoid } from "nextjs-tools";
type OkCancelFC = (onClose: FnVoid) => ReactNode;
export type OkCancelChildren = OkCancelFC | ReactNode;
export interface OkCancelOptions {
    backdrop: boolean;
    escape: boolean;
    enter: boolean;
    header: ReactNode;
    onClickOk: OnClickHandler;
    onClickCancel: OnClickHandler;
    okButton: ReactNode;
    cancelButton: ReactNode;
}
type OnClickHandler = (onClose: FnVoid) => React.MouseEventHandler<HTMLButtonElement>;
export default function (children: OkCancelChildren, opts?: Partial<OkCancelOptions>): void;
export {};
