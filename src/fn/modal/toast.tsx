"use client";
import {ReactNode, useEffect, useRef, useState} from "react";
import {Color} from "../../types";
import {concat, FnVoid} from "nextjs-tools";
import {createRoot} from "react-dom/client";
import {cls} from "@src/fn";
import Image from "next/image";
import ImgClose from "web-asset/svg/regular/fi-rr-cross-circle.svg";

type ToastFC = (onClose: FnVoid) => ReactNode;

export interface ToastOptions {
	color: Color;
	autoClose: boolean;
	timeout: number;
	topOffset: string;
	maxWidth: number | string;
}

const TOAST_ID = "forest-toast";

export default function (children: ToastFC | ReactNode, {topOffset = "80px", ...opts}: Partial<ToastOptions> = {}) {
	const base = document.getElementById(TOAST_ID) || document.createElement("div");
	base.id = TOAST_ID;
	base.style.zIndex = "var(--z-toast)";
	base.style.position = "fixed";
	base.style.left = "0px";
	base.style.top = topOffset;
	base.style.width = "100%";
	document.body.appendChild(base);

	const cont = document.createElement("div");
	cont.style.transition = "var(--transition-150)";
	base.appendChild(cont);

	const root = createRoot(cont);

	const onClose = () => {
		root.unmount();
		cont.remove();

		if (base.children.length === 0) {
			base.remove();
		}
	};

	const target = typeof children === "function" ? children(onClose) : children;

	root.render(
		<Toast
			onClose={onClose}
			{...opts}>
			{target}
		</Toast>
	);
}

interface ToastProps {
	children?: ReactNode;
	onClose: FnVoid;
}

const BgStyle: Record<Color, string> = {
	primary: "bg-(--primary)/60",
	success: "bg-(--success)/60",
	info: "bg-(--info)/60",
	warning: "bg-(--warning)/60",
	danger: "bg-(--danger)/60",
};

function Toast({
	children,
	onClose,
	maxWidth = 1440,
	color = "primary",
	autoClose = true,
	timeout = 10000,
}: Readonly<ToastProps & Partial<ToastOptions>>) {
	const [isInit, setIsInit] = useState(false);
	const onHideAndClose = () => {
		setIsInit(false);
		setTimeout(() => {
			onClose();
		}, 250);
	};
	const onCloseRef = useRef(onHideAndClose);

	useEffect(() => {
		setIsInit(true);
		if (!autoClose) return;
		setTimeout(() => {
			onCloseRef.current();
		}, timeout);
	}, []);

	return (
		<div
			className={concat(
				cls.transition.short,
				"ml-auto mr-auto mb-3",
				"rounded-lg shadow-xl backdrop-blur-md",
				"pt-3 pb-3 pl-5 pr-5",
				"flex items-start",
				isInit ? "opacity-100" : "opacity-0",
				BgStyle[color]
			)}
			style={{maxWidth}}>
			<div>{children}</div>
			<div className="grow" />
			<button
				autoFocus
				className="flex items-center group"
				onClick={onHideAndClose}>
				<Image
					className={concat("filter-(--info-filter) group-hover:filter-none")}
					src={ImgClose}
					alt="close"
					width={20}
					height={20}
				/>
			</button>
		</div>
	);
}
