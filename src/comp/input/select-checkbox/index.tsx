"use client";
import React, {ReactNode, useEffect, useId, useState} from "react";
import {concat, csv, FnBase, fnVoid} from "nextjs-tools";
import Checkbox from "../elem/checkbox";

interface Props<T extends string> extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "hidden"
> {
	items: SelectCheckboxItem<T>[];
	value: T[];
	onChange: FnBase<T[]>;
	label?: ReactNode;
	wrapper?: (children: ReactNode) => ReactNode;
}

export interface SelectCheckboxItem<T extends string> {
	label: ReactNode;
	value: T;
}

export default function <T extends string>({
	items,
	value,
	onChange,
	className = "mb-4",
	label,
	name,
	wrapper,
	...attr
}: Readonly<Props<T>>) {
	const [strValue, setStrValue] = useState(getStrValue(value));
	const id = useId();

	useEffect(() => {
		setStrValue(getStrValue(value));
	}, [value]);

	useEffect(() => {
		onChange(strValue === "" ? [] : strValue.split(",").map((item) => item.trim() as T));
	}, [strValue]);

	const onChangeCheckbox = (item: string, checked: boolean) => {
		checked ? setStrValue(csv.push(strValue, item)) : setStrValue(csv.pop(strValue, item));
	};

	const checkBoxes = items.map((item, key) => (
		<Checkbox
			key={key}
			value={csv.has(strValue, item.value)}
			onChange={(_, checked) => onChangeCheckbox(item.value, checked)}>
			{item.label}
		</Checkbox>
	));

	return (
		<div className={concat(className, "input-container")}>
			{!!label && <label htmlFor={id}>{label}</label>}

			{!!wrapper ? wrapper(checkBoxes) : checkBoxes}

			{!!name && (
				<input
					{...attr}
					id={id}
					hidden
					name={name}
					value={strValue}
					onChange={fnVoid}
				/>
			)}
		</div>
	);
}

function getStrValue(value: string[]): string {
	return value.length === 0 ? "" : value.join(",");
}
