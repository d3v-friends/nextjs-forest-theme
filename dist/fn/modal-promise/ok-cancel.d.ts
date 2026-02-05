import { OkCancelProps } from "../modal/ok-cancel-comp";
import { ReactNode } from "react";
export default function (children: ReactNode, opts?: Omit<OkCancelProps, "children" | "onClose">): Promise<boolean>;
