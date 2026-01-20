"use client";
import React, {HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";
import Input from "../string";
import {FnBase} from "nextjs-tools";
import {StaticImageData} from "next/image";
import {HTMLInputModeAttribute, InputInterceptor} from "../types";

export type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	value: number;
	onChange: FnBase<number>;

	className?: string;
}

interface InputConvenience {
	numberType: NumberType;
	onKeyEnter: FnBase<number>;
	icon: StaticImageData;
	label: ReactNode;
	right: ReactNode;
}

interface InputAttribute {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	inputMode: HTMLInputModeAttribute;
	type: HTMLInputTypeAttribute;
}

export type NumberType = "integer" | "decimal";

export default function (props: Readonly<Props>) {
	const [strValue, setStrValue] = useState(props.value.toString());

	const {
		numberType = "integer",
		icon,
		label,
		className,
		name,
		disabled,
		required,
		placeholder,
		inputMode,
		type,
		onChange,
		right,
	} = props;

	useEffect(() => {
		onChange(Number(strValue));
	}, [strValue]);

	const onKeyEnter = (str: string) => {
		if (!props.onKeyEnter) return;
		props.onKeyEnter(Number(str));
	};

	return (
		<Input
			{...{icon, label, className, name, disabled, required, placeholder, inputMode, type, right, onKeyEnter}}
			value={strValue}
			onChange={setStrValue}
			interceptor={getInterceptor(numberType)}
			onBlurInterceptor={(e) => `${Number(e.target.value)}`}
		/>
	);
}

function getInterceptor(numberType: NumberType): InputInterceptor {
	switch (numberType) {
		case "decimal":
			return Decimal;
		default:
			return Integer;
	}
}

function Integer(e: React.ChangeEvent<HTMLInputElement>): string {
	const val = e.target.value;
	// 숫자와 맨 앞의 마이너스(-)만 허용
	return val.replace(/(?!^-)[^0-9]/g, "");
}

function Decimal(e: React.ChangeEvent<HTMLInputElement>): string {
	let val = e.target.value;

	// 1. 숫자, 마이너스(-), 점(.) 이외의 모든 문자 제거
	val = val.replace(/[^0-9.-]/g, "");

	// 2. 마이너스(-) 처리: 맨 앞에 있는 것만 유지하고 나머지는 제거
	if (val.startsWith("-")) {
		val = "-" + val.slice(1).replace(/-/g, "");
	} else {
		val = val.replace(/-/g, "");
	}

	// 3. 점(.) 처리: 첫 번째 점만 유지하고 나머지는 제거
	const parts = val.split(".");
	if (parts.length > 2) {
		val = parts[0] + "." + parts.slice(1).join("");
	}

	return val;
}
