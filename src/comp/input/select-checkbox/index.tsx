"use client";
import React, {ReactNode, useEffect, useId, useState} from "react";
import {concat, csv, FnBase, fnVoid} from "nextjs-tools";
import Checkbox from "../elem/checkbox";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "hidden"> {
	items: SelectCheckboxItem[];
	value: string[];
	onChange: FnBase<string[]>;
	label?: ReactNode;
}

export interface SelectCheckboxItem {
	label: ReactNode;
	value: string;
}

export default function ({items, value, onChange, className = "mb-4", label, name, ...attr}: Readonly<Props>) {
	const [strValue, setStrValue] = useState(getStrValue(value));
	const id = useId();

	useEffect(() => {
		setStrValue(getStrValue(value));
	}, [value]);

	useEffect(() => {
		onChange(strValue === "" ? [] : csv.split(strValue));
	}, [strValue]);

	const onChangeCheckbox = (item: string, checked: boolean) => {
		checked ? setStrValue(csv.push(strValue, item)) : setStrValue(csv.pop(strValue, item));
	};

	return (
		<div className={concat(className, "input-container")}>
			{!!label && <label htmlFor={id}>{label}</label>}

			{items.map((item, key) => (
				<Checkbox
					key={key}
					value={csv.has(strValue, item.value)}
					onChange={(_, checked) => onChangeCheckbox(item.value, checked)}>
					{item.label}
				</Checkbox>
			))}

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
