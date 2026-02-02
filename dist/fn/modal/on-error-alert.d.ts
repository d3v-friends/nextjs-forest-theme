import { FnBase } from "nextjs-tools";
import { AlertOptions } from "./alert";
import { ReactNode } from "react";
export default function (book: Record<string, ReactNode>, opts?: Partial<AlertOptions>): FnBase<any>;
