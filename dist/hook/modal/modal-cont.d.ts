import React from "react";
import { FnVoid } from "nextjs-tools";
import { Modal, StyleType } from ".";
interface Props {
    children: Modal;
    onClose: FnVoid;
    style?: StyleType;
    isBackdrop?: boolean;
}
export default function ({ children, style, isBackdrop, onClose }: Readonly<Props>): React.ReactPortal | null;
export {};
