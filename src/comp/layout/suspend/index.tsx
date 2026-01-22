"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {concat} from "nextjs-tools";
import {createPortal} from "react-dom";
import cls from "../../../fn/class-names";
import ImgLogo from "../../../../asset/png/forest-theme.png";
import Image from "next/image";

interface Props {
	pending: boolean;
	children?: ReactNode;
	// wait 초 후에 로딩화면이 표시된다.
	wait?: number;
}

export default function ({children = <Children />, pending, wait = 0.2}: Readonly<Props>) {
	const [init, setInit] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		setInit(true);

		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	useEffect(() => {
		if (wait === 0) {
			setShow(true);
			return;
		}

		setTimeout(() => {
			setShow(true);
		}, wait * 1000);
	}, []);

	if (!pending) return null;
	if (!init) return null;

	return createPortal(
		<div
			className={concat(
				"fixed w-full h-full top-0 left-0",
				"flex items-center justify-center",
				cls.transition.default,
				cls.zIndex.loading,
				show ? "backdrop-blur-xs bg-(--suspend) opacity-100" : "opacity-0"
			)}>
			{children}
		</div>,
		document.body
	);
}

function Children() {
	return (
		<div className="flex flex-col items-center no-drag">
			<Image
				className="brightness-50 mb-2 breathing-effect"
				src={ImgLogo}
				alt="logo"
				width={40}
				height={40}
			/>
			<div className="text-xl font-bold text-(--primary) brightness-50 ">Loading</div>
		</div>
	);
}
