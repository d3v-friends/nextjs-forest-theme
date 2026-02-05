"use client";
import React, {ReactNode} from "react";
import {FnVoid} from "nextjs-tools";
import modal from "./index";

type AlertFC = (onClose: FnVoid) => ReactNode;
export type AlertChildren = AlertFC | ReactNode;

export interface AlertOptions {
	backdrop: boolean;
	escape: boolean;
	header: ReactNode;
	onClick: OnClickHandler;
	button: ReactNode;
}

type OnClickHandler = (onClose: FnVoid) => React.MouseEventHandler<HTMLButtonElement>;

const defaultClick: OnClickHandler = (onClose) => () => onClose();

export default function (children: AlertChildren = "", opts: Partial<AlertOptions> = {}) {
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
			backdrop: opts.backdrop,
			escape: opts.escape,
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
	header,
	onClick = defaultClick,
	button = "확인",
}: Readonly<AlertProps & Partial<AlertOptions>>) {
	return (
		<div className="bg-(--modal) rounded shadow-2xl shadow-(--shadow) min-w-80">
			{!!header && <h3 className="header primary pl-3 pr-3 pt-2">{header}</h3>}
			<article className="pl-3 pr-3 pt-2">{children}</article>
			<div className="text-right p-3">
				<button
					autoFocus
					className="filled"
					onClick={onClick(onClose)}>
					{button}
				</button>
			</div>
		</div>
	);
}
