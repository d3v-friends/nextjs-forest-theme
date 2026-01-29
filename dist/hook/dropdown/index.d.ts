import { ReactNode } from "react";
import { FnVoid, Position } from "nextjs-tools";
type Wrapper = (children: (isOpen: boolean) => ReactNode) => ReactNode;
export type DropdownChildren = (props: Position & {
    onClose: FnVoid;
}) => ReactNode;
export interface Options {
    align: "left" | "right";
    className: string;
}
export default function (dropdown?: DropdownChildren, opts?: Partial<Options>): [Wrapper];
export {};
