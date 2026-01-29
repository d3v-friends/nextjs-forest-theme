import { ReactNode } from "react";
interface Props {
    children?: Children;
}
type Children = (props: {
    scrollTop: number;
}) => ReactNode;
export default function ({ children }: Readonly<Props>): ReactNode;
export {};
