import { ReactNode } from "react";
interface Props {
    children?: ReactNode;
    scrollable?: boolean;
}
export default function ({ scrollable, children }: Readonly<Props>): ReactNode;
export {};
