import { ReactNode } from "react";
import { AsideSector } from "../../..";
import { FnBase } from "nextjs-tools";
interface Props {
    aside: AsideSector[];
    isOpen: boolean;
    onChangeIsOpen: FnBase<boolean>;
    header?: ReactNode;
}
export default function ({ aside, isOpen, onChangeIsOpen, header }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
