import { ReactNode } from "react";
import { AsideSector } from "../../..";
interface Props {
    aside: AsideSector[];
    header: ReactNode;
}
export default function ({ aside, header }: Readonly<Partial<Props>>): false | import("react/jsx-runtime").JSX.Element;
export {};
