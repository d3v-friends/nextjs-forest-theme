"use client";
import React, {MouseEventHandler, ReactNode} from "react";
import {ButtonColor, ButtonType} from "../types";
import {concat} from "nextjs-tools";
import {cls} from "../../..";

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
				onClick={onClick}
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
		background: "border-1 border-[transparent] group-hover:border-(--primary) active:brightness-90",
		children: "text-(--primary) brightness-90 group-hover:underline",
	},
	danger: {
		background: "border-1 border-[transparent] group-hover:border-(--danger) active:brightness-70",
		children: "text-(--danger) brightness-90 group-hover:underline",
	},
	success: {
		background:
			"border-1 border-[transparent] group-hover:border-(--success) hover:brightness-140 active:brightness-90",
		children: "text-(--success) brightness-90 group-hover:underline",
	},
	warning: {
		background:
			"border-1 border-[transparent] group-hover:border-(--warning) hover:brightness-110 active:brightness-90",
		children: "text-(--warning) brightness-90 group-hover:underline",
	},
	info: {
		background:
			"border-1 border-[transparent] group-hover:border-(--info) hover:brightness-130 active:brightness-60",
		children: "text-(--info) brightness-90 group-hover:underline",
	},
};
