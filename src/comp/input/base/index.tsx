"use client";

import React, {ReactNode, useEffect, useId, useState} from "react";
import {concat, FnBase} from "nextjs-tools";
import ImgWarn from "web-asset/svg/regular/fi-rr-triangle-warning.svg";
import Image from "next/image";

export interface Props extends InputProps, InvalidMessageProps {
	value: string;
	onChange: FnBase<string>;
	onChangeInterceptor?: (e: React.ChangeEvent<HTMLInputElement>) => string;
	label?: ReactNode;
	children?: ReactNode;
}
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export default function ({
	className = "",
	value,
	onChange,
	onChangeInterceptor = (e) => e.target.value,
	label,
	invalidMessage,
	regexp,
	children,
	...attr
}: Readonly<Props>) {
	const id = useId();

	return (
		<div className={concat(className, "input-container")}>
			<Label id={id}>{label}</Label>
			<Aside aside={children}>
				<input
					id={id}
					className="lined"
					value={value}
					onChange={(e) => onChange(onChangeInterceptor(e))}
					{...attr}
				/>
			</Aside>
			<InvalidMessage
				value={value}
				regexp={regexp}
				invalidMessage={invalidMessage}
			/>
		</div>
	);
}

interface LabelProps {
	children?: ReactNode;
	id: string;
}

function Label({id, children}: Readonly<LabelProps>) {
	if (!children) return null;
	return (
		<label
			className="no-drag"
			htmlFor={id}>
			{children}
		</label>
	);
}

interface InvalidMessageProps {
	regexp?: RegExp | string;
	invalidMessage?: ReactNode;
}

function InvalidMessage({regexp, invalidMessage, value}: Readonly<InvalidMessageProps & {value: string}>) {
	const [isValid, setIsValid] = useState(true);

	useEffect(() => {
		if (!regexp) return;
		if (value === "") {
			setIsValid(true);
			return;
		}
		setIsValid(new RegExp(regexp).test(value));
	}, [value]);

	if (!regexp) return null;
	if (!invalidMessage) return null;

	return (
		<p className="flex items-center">
			{!isValid && (
				<>
					<Image
						className="filter-(--danger-filter) mr-1"
						src={ImgWarn}
						alt="warn"
						width={15}
						height={15}
					/>
					{invalidMessage}
				</>
			)}
		</p>
	);
}

interface AsideProps {
	aside?: ReactNode;
	children: ReactNode;
}

function Aside({aside, children}: Readonly<AsideProps>) {
	if (!aside) return children;

	return (
		<div className="flex items-baseline">
			{children}
			<div className="ml-2">{aside}</div>
		</div>
	);
}
