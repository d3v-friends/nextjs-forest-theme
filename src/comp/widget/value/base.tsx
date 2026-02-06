"use client";
import React, {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";
import {Color} from "../../../types";
import {concat} from "nextjs-tools";
import {cls} from "../../..";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	icon?: StaticImageData;
	iconColor?: Color;
	text?: string;
	copyable?: boolean;
}

export default function ({
	children,
	icon,
	iconColor = "primary",
	copyable = false,
	text = "",
	...opts
}: Readonly<Props>) {
	return (
		<span {...opts}>
			<div
				className="text-(--info) flex inline-flex items-center"
				suppressHydrationWarning>
				{icon && (
					<Image
						className={concat("mr-1 w-4", cls.filter[iconColor])}
						src={icon}
						alt="icon"
						width={20}
						height={20}
					/>
				)}
				{copyable ? <Children text={text}>{children}</Children> : children}
			</div>
		</span>
	);
}

interface ChildrenProps {
	children?: ReactNode;
	text: string;
}

function Children({children, text}: Readonly<ChildrenProps>) {
	const onCopy = () => {
		window.navigator.clipboard.writeText(text).catch((e) => console.error(e));
	};

	return (
		<button
			className="hover:underline"
			type="button"
			onClick={onCopy}
			suppressHydrationWarning>
			{children}
		</button>
	);
}
