import { ReactNode } from "react";
import "../../../../asset/style/index.scss";
interface Props {
    children?: ReactNode;
    lang?: string;
}
export default function ({ children, lang }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
