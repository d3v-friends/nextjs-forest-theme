"use client";
import React, {useEffect, useState} from "react";
import {concat, FnVoid} from "nextjs-tools";
import {createPortal} from "react-dom";
import {cls} from "../..";
import {Modal, StyleType} from ".";

interface Props {
	children: Modal;
	onClose: FnVoid;
	style?: StyleType;
	isBackdrop?: boolean;
}

const Style: Record<StyleType, string> = {
	transparent: "backdrop-blur-xs",
	grayscale: "backdrop-blur-xs backdrop-grayscale-40 bg-[rgba(0,0,0,0.5)]",
};

export default function ({children, style = "grayscale", isBackdrop = true, onClose}: Readonly<Props>) {
	const [isInit, setIsInit] = useState(false);
	useEffect(() => {
		setIsInit(true);
	}, []);

	if (!children) return null;
	if (!isInit) return null;

	const styleClassName = Style[style];

	return createPortal(
		<div
			className={concat(
				styleClassName,
				"fixed w-screen h-screen top-0 left-0",
				"flex justify-center items-center",
				cls.zIndex.modal
			)}
			onClick={() => {
				if (isBackdrop) onClose();
			}}>
			<div onClick={(e) => e.stopPropagation()}>{children(onClose)}</div>
		</div>,
		document.body
	);
}
