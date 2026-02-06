"use client";
import React, {ReactNode} from "react";
import strconv from "@src/fn/strconv";
import Base from "./base";

interface Props extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
	children: string | number;
	copyable?: boolean;
	thousandSeparator?: boolean;
	suffix?: ReactNode;
}

export default function ({children, thousandSeparator = true, suffix, ...opts}: Readonly<Props>) {
	const label = thousandSeparator ? strconv.toSplitNumber(children) : children;
	return (
		<Base
			{...opts}
			text={`${children}`}>
			{label}
			{suffix && <span className="ml-1 brightness-180">{suffix}</span>}
		</Base>
	);
}
