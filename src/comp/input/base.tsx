import React, {ReactNode} from "react";
import ImgWarn from "web-asset/svg/regular/fi-rr-triangle-warning.svg";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";
import {DefaultOnClickCheckboxInterceptor, OnClickCheckboxInterceptor} from "./types";
import {concat, fnVoid} from "nextjs-tools";
import cls from "../../fn/class-names";

const CSS = {
	label: {
		focus: "text-md text-(--primary) brightness-70 font-bold",
		noFocus: "text-sm text-(--info)",
	},
	cont: {
		focus: "border-(--primary)",
		noFocus: "border-(--border)",
		invalid: "border-(--danger)",
	},
};

interface LabelProps {
	children: ReactNode;
	isFocus: boolean;
	className: string;
}

function Label({children, isFocus = false, className = ""}: Readonly<Partial<LabelProps>>) {
	if (!children) return null;
	return (
		<div className={concat("h-6", cls.transition.short, CSS.label[isFocus ? "focus" : "noFocus"], className)}>
			{children}
		</div>
	);
}

function Container({
	children,
	isFocus = false,
	isInvalid = false,
}: Readonly<{children?: ReactNode; isFocus?: boolean; isInvalid?: boolean}>) {
	let focusKey: keyof typeof CSS.cont = isFocus ? "focus" : "noFocus";
	if (isInvalid) focusKey = "invalid";
	return (
		<div className={concat("border-b pr-2 pb-2 grow", cls.transition.short, CSS.cont[focusKey])}>{children}</div>
	);
}

function InvalidMessage({children, isInvalid}: Readonly<{children?: ReactNode; isInvalid?: boolean}>) {
	const defaultHeight = "h-6";
	if (!children) return null;
	if (!isInvalid) return <div className={defaultHeight} />;
	return (
		<div className={concat(defaultHeight, "text-sm text-(--danger)", "flex items-center")}>
			<Image
				className="filter-(--danger-filter) mr-1"
				src={ImgWarn}
				alt="warn"
				width={15}
				height={15}
			/>
			{children}
		</div>
	);
}

interface InputRightProps {
	children?: ReactNode;
}

function InputRight({children}: Readonly<InputRightProps>) {
	if (!children) return null;
	return <div className="pl-2">{children}</div>;
}

function Checkbox({
	value,
	children,
	onClickInterceptor = DefaultOnClickCheckboxInterceptor,
	onChange,
}: Readonly<{
	value: boolean;
	children: ReactNode;
	onChange: (value: boolean) => void;
	onClickInterceptor?: OnClickCheckboxInterceptor;
}>) {
	return (
		<button
			type="button"
			className={concat(cls.height.input, "flex items-center")}
			onClick={(e) => onChange(onClickInterceptor(e, !value))}>
			<div
				className={concat(
					"border-(--border) border w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center overflow-hidden",
					value ? "border-(--primary) bg-(--primary)" : ""
				)}>
				<Image
					className={concat("w-[0.7rem]", value ? "" : "hidden")}
					src={ImgCheck}
					alt="check"
					width={18}
					height={18}
				/>
			</div>
			<div className={concat("pl-2 text-sm", value ? "" : " text-(--info)")}>{children}</div>
		</button>
	);
}

interface InputHiddenProps {
	name?: string;
	value: string;
}

function InputHidden({value, name}: Readonly<InputHiddenProps>) {
	if (!name) return null;
	return (
		<input
			name={name}
			hidden
			value={value}
			onChange={fnVoid}
		/>
	);
}

export default {Label, InvalidMessage, Container, InputRight, InputHidden, Checkbox};
