"use client";
import React, {FocusEventHandler, useEffect, useState} from "react";
import InputBase, {Props as BaseProps} from "../base/index";
import {FnBase, fnVoid, Nullable} from "nextjs-tools";
import {InputInterceptor} from "@src/comp/input/types";

interface Props extends Omit<BaseProps, "value" | "onChange" | "onChangeInterceptor" | "type"> {
	value: Nullable<number>;
	onChange: FnBase<Nullable<number>>;
}

// todo 추수 숫자 타입에 따라서 입력 가능한 방법 제한 하기
// 자연수
// 정수
// 실수
export default function ({value, onChange, onBlur = fnVoid, ...attr}: Readonly<Props>) {
	const [strValue, setStrValue] = useState(value ? value.toString() : "");

	const onBlurEvent: FocusEventHandler<HTMLInputElement> = (e) => {
		onBlur(e);
		const next = toNumber(e.target.value);
		onChange(next);
		setStrValue(next ? next.toString() : "");
	};

	useEffect(() => {
		setStrValue(value ? value.toString() : "");
	}, [value]);

	return (
		<InputBase
			{...attr}
			value={strValue}
			onChange={(str) => setStrValue(str)}
			onBlur={onBlurEvent}
			type="number"
		/>
	);
}

function toNumber(value: string): number | null {
	if (!value || value.trim() === "") return null;
	const converted = Number(value);
	return isNaN(converted) || !isFinite(converted) ? null : converted;
}

export type NumberType = "integer" | "decimal";

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
