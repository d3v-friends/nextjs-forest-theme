"use client";
import React from "react";
import Decimal from "decimal.js";
import {concat} from "nextjs-tools";
import cls from "../../../fn/class-names";
import {Color} from "../../../types";
import strconv from "@src/fn/strconv";

interface Props {
	max: number;
	value: number;
	color?: Color;
	className?: string;
	detail?: boolean;
}

export default function ({max, value, className = "mb-4", color = "primary", detail = false}: Readonly<Props>) {
	const width = new Decimal(value).div(max).mul(100).ceil().toNumber();

	return (
		<div className={className}>
			<div className="flex items-center">
				<Bar
					value={value}
					color={color}
					max={max}
				/>
				{detail && (
					<div className="text-sm w-1/6 text-right">
						{strconv.toSplitNumber(value)} /
						<span className="text-(--info)">{strconv.toSplitNumber(max)}</span>
					</div>
				)}
			</div>
		</div>
	);
}
const Style: Record<Color, string> = {
	primary: "bg-(--primary) text-(--primary-alt)",
	info: "bg-(--info) text-(--info-alt)",
	success: "bg-(--success) text-(--success-alt)",
	warning: "bg-(--warning) text-(--warning-alt)",
	danger: "bg-(--danger) text-(--danger-alt)",
};

interface BarProps {
	value: number;
	max: number;
	color: Color;
}

function Bar({value, max, color}: Readonly<BarProps>) {
	const width = new Decimal(value).div(max).mul(100).ceil().toNumber();
	return (
		<div className={concat("bg-(--border) rounded-lg overflow-hidden h-5 grow")}>
			<div
				className={concat(
					cls.transition.default,
					Style[color],
					"text-xs font-bold overflow-hidden h-full flex items-center justify-center"
				)}
				style={{width: `${width}%`}}>
				{width}%
			</div>
		</div>
	);
}
