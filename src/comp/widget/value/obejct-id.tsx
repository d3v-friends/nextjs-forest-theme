"use client";
import React from "react";
import {StaticImageData} from "next/image";
import {Color} from "@src";
import Base from "./base";
import ImgId from "web-asset/svg/regular/fi-rr-id-badge.svg";

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
	children: string;
	icon?: StaticImageData;
	iconColor?: Color;
	copyable?: boolean;
}

export default function ({children, ...opts}: Readonly<Props>) {
	const label = 6 < children.length ? children.slice(0, 6) + "..." : children;

	return (
		<Base
			icon={ImgId}
			text={children}
			{...opts}>
			{label}
		</Base>
	);
}
