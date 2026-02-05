"use client";
import React, {ReactNode} from "react";
import {FnVoid} from "nextjs-tools";

interface AlertProps {
	children?: ReactNode;
	header?: ReactNode;
	buttonText?: ReactNode;
	onClose: FnVoid;
}

export default function ({onClose, children, header, buttonText = "확인"}: Readonly<Partial<AlertProps>>) {
	return (
		<div className="bg-(--modal) rounded shadow-2xl shadow-(--shadow) min-w-80">
			{!!header && <h3 className="header primary pl-3 pr-3 pt-2">{header}</h3>}
			<article className="pl-3 pr-3 pt-2">{children}</article>
			<div className="text-right p-3">
				<button
					autoFocus
					className="filled"
					onClick={onClose}>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
