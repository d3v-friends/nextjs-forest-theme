import { ReactNode } from "react";
interface Props {
    page: number;
    size: number;
    total: number;
    pageKey?: string;
    sizeKey?: string;
    className?: string;
    buttons?: number;
    sizeList?: {
        label: ReactNode;
        value: number;
    }[];
}
export default function ({ page, size, total, pageKey, sizeKey, className, buttons, sizeList, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
