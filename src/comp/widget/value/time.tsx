"use client";
import React from "react";
import {DateTime} from "luxon";
import Base from "./base";
import ImgClock from "web-asset/svg/regular/fi-rr-clock-nine.svg";

interface Props extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
	children: string | Date;
	timezone?: string;
	copyable?: boolean;
	format?: string;
	locale?: string;
}

export default function ({
	children,
	timezone = "local",
	format = "yy.MM.dd (a HH:mm)",
	locale = "ko",
	...opts
}: Readonly<Props>) {
	const str = children instanceof Date ? children.toISOString() : children;
	const time = DateTime.fromISO(str);
	if (!time.isValid) return `${children} is not time`;

	const label = time.setZone(timezone).toFormat(format, {locale});

	return (
		<Base
			icon={ImgClock}
			text={str}
			{...opts}>
			{label}
		</Base>
	);
}
