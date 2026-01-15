"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {ButtonColor, ButtonType} from "../types";
import {cls} from "../../..";
import {concat} from "nextjs-tools";

type Props = ButtonProps & Partial<Attribute> & Partial<Handler>;

interface ButtonProps {
	children?: ReactNode;
	color?: ButtonColor;
	className?: string;
}

interface Handler {
	onClick: MouseEventHandler<HTMLButtonElement>;
	onMiddleClick: MouseEventHandler<HTMLButtonElement>;
}

interface Attribute {
	type: ButtonType;
}

export default function ({
	children,
	color = "primary",
	className = "",

	// handler
	onClick = () => {},
	onMiddleClick = () => {},

	// attribute
	type = "button",
}: Readonly<Props>) {
	const onMouseUp: MouseEventHandler<HTMLButtonElement> = (e) => {
		switch (e.button) {
			case 0:
				// left click
				onClick(e);
				break;
			case 1:
				// middle click
				onMiddleClick(e);
				break;
		}
	};

	const style = Styles[color];

	return (
		<div className={concat(className, "group")}>
			<button
				className={concat(
					"pt-3 pb-3 pl-6 pr-6 w-full rounded-md",
					"text-sm font-bold outline-none",
					style.background,
					cls.transition.instant,
					"active:duration-0"
				)}
				{...{type}}
				onMouseUp={onMouseUp}>
				<span className={concat(style.children, cls.transition.instant)}>{children}</span>
			</button>
		</div>
	);
}

interface ButtonStyle {
	background: string;
	children: string;
}

const Styles: Record<ButtonColor, ButtonStyle> = {
	primary: {
		background:
			"border-1 border-(--primary) group-hover:bg-(--primary) group-hover:brightness-140 group-active:brightness-90",
		children: "text-(--primary) brightness-90 group-hover:text-(--primary-alt)",
	},
	danger: {
		background:
			"border-1 border-(--danger) group-hover:bg-(--danger) group-hover:brightness-140 group-active:brightness-90",
		children: "text-(--danger) group-hover:text-(--danger-alt)",
	},
	success: {
		background: "border-1 border-(--success) group-hover:bg-(--success) hover:brightness-140 active:brightness-90",
		children: "text-(--success) group-hover:text-(--success-alt)",
	},
	warning: {
		background: "border-1 border-(--warning) group-hover:bg-(--warning) hover:brightness-110 active:brightness-90",
		children: "text-(--warning) group-hover:text-(--warning-alt) brightness-80",
	},
	info: {
		background: "border-1 border-(--info) group-hover:bg-(--info) hover:brightness-130 active:brightness-90",
		children: "text-(--info) group-hover:text-(--info-alt)",
	},
};
