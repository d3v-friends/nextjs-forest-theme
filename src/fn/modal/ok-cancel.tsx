"use client";
import React, {ReactNode, useEffect, useRef} from "react";
import {FnVoid} from "nextjs-tools";
import modal from "./index";

type OkCancelFC = (onClose: FnVoid) => ReactNode;
export type OkCancelChildren = OkCancelFC | ReactNode;

export interface OkCancelOptions {
	backdrop: boolean;
	escape: boolean;
	enter: boolean;
	header: ReactNode;
	onClickOk: OnClickHandler;
	onClickCancel: OnClickHandler;
	okButton: ReactNode;
	cancelButton: ReactNode;
}
type OnClickHandler = (onClose: FnVoid) => React.MouseEventHandler<HTMLButtonElement>;
const defaultClick: OnClickHandler = (onClose) => () => onClose();

export default function (children: OkCancelChildren, opts: Partial<OkCancelOptions> = {}) {
	modal(
		(onClose) => {
			let target: ReactNode = typeof children === "function" ? children(onClose) : children;
			return (
				<Alert
					onClose={onClose}
					{...opts}>
					{target}
				</Alert>
			);
		},
		{
			backdrop: false,
			escape: false,
		}
	);
}

interface AlertProps {
	children?: ReactNode;
	onClose: FnVoid;
}

function Alert({
	onClose,
	children,
	escape = true,
	enter = true,
	header,
	onClickOk = defaultClick,
	onClickCancel = defaultClick,
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

	return (
		<div
			className="cont"
			onMouseUp={(e) => e.stopPropagation()}>
			{!!header && <h3 className="header primary">{header}</h3>}
			<article>{children}</article>
			<div className="text-right p-2">
				<button
					ref={cancelButtonRef}
					className="lined info mr-2"
					onClick={onClickCancel(onClose)}>
					{cancelButton}
				</button>

				<button
					autoFocus
					ref={okButtonRef}
					className="filled"
					onClick={onClickOk(onClose)}>
					{okButton}
				</button>
			</div>
		</div>
	);
}
