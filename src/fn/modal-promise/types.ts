import {ReactNode} from "react";
import {FnBase} from "nextjs-tools";

export interface ModalPromiseOptions {
	backdrop: boolean;
	escape: boolean;
}

export type ModalPromiseChildren = (onClose: FnBase<boolean>) => ReactNode;
