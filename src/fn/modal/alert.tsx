"use client";
import React, {ReactNode, useEffect, useRef} from "react";
import {fnVoid, FnVoid} from "nextjs-tools";
import modal from "./index";

type AlertFC = (onClose: FnVoid) => ReactNode;
export type AlertChildren = AlertFC | ReactNode;

export interface AlertOptions {
	backdrop: boolean;
	escape: boolean;
	header: ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	button: ReactNode;
}
export default function (children: AlertChildren = "", opts: Partial<AlertOptions> = {}) {
	modal((onClose) => {
		let target: ReactNode = typeof children === "function" ? children(onClose) : children;

		return (
			<Alert
				onClose={onClose}
				{...opts}>
				{target}
			</Alert>
		);
	});
}

interface AlertProps {
	children?: ReactNode;
	onClose: FnVoid;
}

function Alert({
	onClose,
	children,
	backdrop = true,
	escape = true,
	header,
	onClick = fnVoid,
	button = "확인",
}: Readonly<AlertProps & Partial<AlertOptions>>) {
	const onCloseRef = useRef(onClose);

	useEffect(() => {
		if (!escape) return;

		const handler = (e: KeyboardEvent) => {
			if (e.key !== "Escape") return;
			onCloseRef.current();
		};
		document.addEventListener("keydown", handler);
		return () => document.removeEventListener("keydown", handler);
	}, []);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	return (
		<dialog
			onMouseUp={(e) => {
				if (e.button !== 0) return;
				if (backdrop) onClose();
			}}>
			<div
				className="cont"
				onMouseUp={(e) => e.stopPropagation()}>
				{!!header && <h3 className="header primary">{header}</h3>}
				<article>{children}</article>
				<div className="text-right p-2">
					<button
						autoFocus
						className="filled"
						onClick={(e) => {
							onClick(e);
							onClose();
						}}>
						{button}
					</button>
				</div>
			</div>
		</dialog>
	);
}
