import { ModalPromiseChildren, ModalPromiseOptions } from "./types";
export declare const ModalEscaped = "MODAL_ESCAPED";
export declare const ModalCanceled = "MODAL_CANCELLED";
export default function (children: ModalPromiseChildren, opts?: Partial<ModalPromiseOptions>): Promise<boolean>;
