import React, { ReactNode } from "react";
import { Modal } from "./index";
interface OkModal {
    title?: ReactNode;
    content?: ReactNode;
    onClickOk?: React.MouseEventHandler<HTMLButtonElement>;
    okButton?: ReactNode;
    bodyClassName?: string;
}
declare function ok({ title, content, onClickOk, okButton, bodyClassName }: Readonly<OkModal>): Modal;
interface OkCancelModal {
    title?: ReactNode;
    content?: ReactNode;
    onClickOk?: React.MouseEventHandler<HTMLButtonElement>;
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement>;
    okButton?: ReactNode;
    cancelButton?: ReactNode;
    bodyClassName?: string;
}
declare function okCancel({ title, content, onClickOk, okButton, onClickCancel, cancelButton, bodyClassName, }: Readonly<OkCancelModal>): Modal;
declare const _default: {
    ok: typeof ok;
    okCancel: typeof okCancel;
};
export default _default;
