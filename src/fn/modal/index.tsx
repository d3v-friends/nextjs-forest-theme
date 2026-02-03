"use client";
import React, {ReactNode, useEffect, useRef} from "react";
import {FnVoid} from "nextjs-tools";
import {createRoot} from "react-dom/client";

type ModalFC = (onClose: FnVoid) => ReactNode;

export type ModalChildren = ModalFC | ReactNode;

export interface ModalOptions {
	backdrop: boolean;
	escape: boolean;
}

export default function (children: ModalFC | ReactNode, opts: Partial<ModalOptions> = {}) {
	const cont = document.createElement("dialog");
	cont.onmouseup = (e) => {
		if (e.button !== 0) return;
		if (opts.backdrop) onClose();
	};
	document.body.appendChild(cont);

	const root = createRoot(cont);
	const onClose = () => {
		root.unmount();
		cont.remove();
	};

	let target: ReactNode;
	if (typeof children === "function") {
		target = children(onClose);
	} else {
		target = children;
	}

	root.render(
		<Alert
			onClose={onClose}
			{...opts}>
			{target}
		</Alert>
	);
}

interface AlertProps {
	children?: ReactNode;
	onClose: FnVoid;
}

function Alert({onClose, children, escape = true}: Readonly<AlertProps & Partial<ModalOptions>>) {
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

	return <div onMouseUp={(e) => e.stopPropagation()}>{children}</div>;
}
