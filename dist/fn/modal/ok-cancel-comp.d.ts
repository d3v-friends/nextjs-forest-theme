import { ReactNode } from "react";
import { FnBase } from "nextjs-tools";
export interface OkCancelProps {
    onClose: FnBase<boolean>;
    escape?: boolean;
    enter?: boolean;
    header?: ReactNode;
    okButton?: ReactNode;
    cancelButton?: ReactNode;
    children?: ReactNode;
}
export default function ({ onClose, children, escape, enter, header, okButton, cancelButton, }: Readonly<OkCancelProps>): import("react/jsx-runtime").JSX.Element;
