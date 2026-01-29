import { Color } from "../../../types";
interface Props {
    max: number;
    value: number;
    color?: Color;
    className?: string;
    detail?: boolean;
}
export default function ({ max, value, className, color, detail }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
