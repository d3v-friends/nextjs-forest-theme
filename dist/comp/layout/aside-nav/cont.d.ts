import { ReactNode } from "react";
import { StringBoolean } from "../../../types";
import { AsideSector } from ".";
interface Props {
    aside: AsideSector[];
    children: ReactNode;
    header: ReactNode;
}
export default function ({ aside, children, initStatus, header, }: Readonly<Partial<Props> & {
    initStatus: StringBoolean;
}>): import("react/jsx-runtime").JSX.Element;
export {};
