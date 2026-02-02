import { ReactNode } from "react";
export interface SuspendProps {
    wait: number;
    children: ReactNode;
}
export default function <T>(job: Promise<T>, opts?: Partial<SuspendProps>): void;
