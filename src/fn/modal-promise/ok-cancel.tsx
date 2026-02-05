"use client";
import create from "./index";
import OkCancel, {OkCancelProps} from "../modal/ok-cancel-comp";
import {ReactNode} from "react";

export default function (
	children: ReactNode,
	opts: Omit<OkCancelProps, "children" | "onClose"> = {}
): Promise<boolean> {
	return create((onClose) => (
		<OkCancel
			{...opts}
			onClose={onClose}>
			{children}
		</OkCancel>
	));
}
