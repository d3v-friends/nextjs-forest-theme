import React, { ReactNode } from "react";
declare function Title({ children }: Readonly<{
    children?: ReactNode;
}>): import("react/jsx-runtime").JSX.Element;
declare function Content({ children }: Readonly<{
    children?: ReactNode;
}>): import("react/jsx-runtime").JSX.Element | null;
interface OkProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}
declare function Ok({ onClick, children }: Readonly<OkProps>): import("react/jsx-runtime").JSX.Element;
interface OkCancelProps {
    onClickOk?: React.MouseEventHandler<HTMLButtonElement>;
    onClickCancel?: React.MouseEventHandler<HTMLButtonElement>;
    okButton?: ReactNode;
    cancelButton?: ReactNode;
}
declare function OkCancel({ onClickOk, onClickCancel, okButton, cancelButton }: Readonly<OkCancelProps>): import("react/jsx-runtime").JSX.Element;
interface BodyProps {
    children?: ReactNode;
    className?: string;
}
declare function Body({ children, className }: Readonly<BodyProps>): import("react/jsx-runtime").JSX.Element;
declare const _default: {
    Title: typeof Title;
    Content: typeof Content;
    Body: typeof Body;
    Ok: typeof Ok;
    OkCancel: typeof OkCancel;
};
export default _default;
