"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {concat} from "nextjs-tools";
import {cls} from "../../..";
import {ButtonColor, ButtonType} from "../types";

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
	className,

	// handler
	onClick = () => {},
	onMiddleClick = () => {},

	// attribute
	type = "button",
}: Readonly<Props>) {
	const onMouseDown: MouseEventHandler<HTMLButtonElement> = (e) => {
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
		<div className={className}>
			<button
				className={concat(
					"pt-3 pb-3 pl-6 pr-6 w-full rounded-md",
					"text-sm font-bold outline-none",
					style.background,
					cls.transition.instant,
					"active:duration-0"
				)}
				{...{type}}
				onMouseDown={onMouseDown}>
				<span className={style.children}>{children}</span>
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
		background: "bg-(--primary) hover:brightness-140 active:brightness-90",
		children: "",
	},
	danger: {
		background: "bg-(--danger) hover:brightness-140 active:brightness-90",
		children: "",
	},
	success: {
		background: "bg-(--success) hover:brightness-140 active:brightness-90",
		children: "",
	},
	warning: {
		background: "bg-(--warning) hover:brightness-110 active:brightness-90",
		children: "",
	},
	info: {
		background: "bg-(--info) hover:brightness-130 active:brightness-90",
		children: "text-(--info-alt)",
	},
};
