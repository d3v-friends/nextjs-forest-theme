import { ModalPromiseOptions } from "../..";
import { ReactNode } from "react";
export interface AlertPromiseOptions extends ModalPromiseOptions {
    header: ReactNode;
    buttonText?: ReactNode;
}
export default function (children: ReactNode, { header, buttonText, ...opts }?: Partial<AlertPromiseOptions>): Promise<boolean>;
