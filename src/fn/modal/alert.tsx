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
		<div className="cont">
			{!!header && <h3 className="header primary">{header}</h3>}
			<article>{children}</article>
			<div className="text-right p-2">
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
