"use client";
import React from "react";
import Decimal from "decimal.js";
import {concat} from "nextjs-tools";
import cls from "../../../fn/class-names";
import {Color} from "../../../types";

interface Props {
	max: number;
	value: number;
	color?: Color;
	className?: string;
}

const Style: Record<Color, string> = {
	primary: "bg-(--primary) text-(--primary-alt)",
	info: "bg-(--info) text-(--info-alt)",
	success: "bg-(--success) text-(--success-alt)",
	warning: "bg-(--warning) text-(--warning-alt)",
	danger: "bg-(--danger) text-(--danger-alt)",
};

export default function ({max, value, className = "mb-4", color = "primary"}: Readonly<Props>) {
	const width = new Decimal(value).div(max).mul(100).ceil().toNumber();

	return (
		<div className={className}>
			<div className={concat("bg-(--border) rounded-lg overflow-hidden h-5")}>
				<div
					className={concat(
						cls.transition.default,
						Style[color],
						"text-xs font-bold overflow-hidden h-full flex items-center justify-center"
					)}
					style={{width: `${width}%`}}>
					{width} %
				</div>
			</div>
		</div>
	);
}
