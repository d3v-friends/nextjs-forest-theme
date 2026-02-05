"use client";
import React, {ReactNode, useEffect, useRef} from "react";
import {FnBase} from "nextjs-tools";

export interface OkCancelProps {
	onClose: FnBase<boolean>;
	escape?: boolean;
	enter?: boolean;
	header?: ReactNode;
	okButton?: ReactNode;
	cancelButton?: ReactNode;
	children?: ReactNode;
}

export default function ({
	onClose,
	children,
	escape = true,
	enter = true,
	header,
	okButton = "확인",
	cancelButton = "취소",
}: Readonly<OkCancelProps>) {
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
			className="bg-(--modal) rounded shadow-2xl shadow-(--shadow) min-w-80"
			onMouseUp={(e) => e.stopPropagation()}>
			{!!header && <h3 className="header primary pl-3 pr-3 pt-2">{header}</h3>}
			<article className="pl-3 pr-3 pt-2">{children}</article>
			<div className="text-right p-2">
				<button
					ref={cancelButtonRef}
					className="lined info mr-2"
					onClick={() => onClose(false)}>
					{cancelButton}
				</button>

				<button
					autoFocus
					ref={okButtonRef}
					className="filled"
					onClick={() => onClose(true)}>
					{okButton}
				</button>
			</div>
		</div>
	);
}
