import create from "./index";
import {ModalPromiseOptions} from "@src";
import {ReactNode} from "react";
import AlertComp from "../modal/alert-comp";

export interface AlertPromiseOptions extends ModalPromiseOptions {
	header: ReactNode;
	buttonText?: ReactNode;
}

export default function (
	children: ReactNode,
	{header, buttonText, ...opts}: Partial<AlertPromiseOptions> = {}
): Promise<boolean> {
	return create(
		(onClose) => (
			<AlertComp
				onClose={() => onClose(true)}
				header={header}
				buttonText={buttonText}>
				{children}
			</AlertComp>
		),
		opts
	);
}
