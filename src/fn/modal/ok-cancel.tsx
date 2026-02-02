"use client";
import React, {ReactNode, useEffect, useRef} from "react";
import {fnVoid, FnVoid} from "nextjs-tools";
import modal from "./index";

type OkCancelFC = (onClose: FnVoid) => ReactNode;
export type OkCancelChildren = OkCancelFC | ReactNode;

export interface OkCancelOptions {
	backdrop: boolean;
	escape: boolean;
	enter: boolean;
	header: ReactNode;
	onClickOk: React.MouseEventHandler<HTMLButtonElement>;
	onClickCancel: React.MouseEventHandler<HTMLButtonElement>;
	okButton: ReactNode;
	cancelButton: ReactNode;
}

export default function (children: OkCancelChildren, opts: Partial<OkCancelOptions> = {}) {
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
	backdrop = false,
	escape = true,
	enter = true,
	header,
	onClickOk = fnVoid,
	onClickCancel = fnVoid,
	okButton = "확인",
	cancelButton = "취소",
}: Readonly<AlertProps & Partial<OkCancelOptions>>) {
	const okButtonRef = useRef<HTMLButtonElement>(null);
	const cancelButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			switch (e.key) {
				case "Escape":
					if (!escape) return;
					cancelButtonRef.current?.click();
					break;
				case "Enter":
					if (!enter) return;
					okButtonRef.current?.click();
					break;
			}
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
						ref={cancelButtonRef}
						className="lined info mr-2"
						onClick={(e) => {
							onClickCancel(e);
							onClose();
						}}>
						{cancelButton}
					</button>

					<button
						autoFocus
						ref={okButtonRef}
						className="filled"
						onClick={(e) => {
							onClickOk(e);
							onClose();
						}}>
						{okButton}
					</button>
				</div>
			</div>
		</dialog>
	);
}
