"use client";
import React, {ReactNode, useEffect, useState} from "react";
import Base from "../base";
import {concat, csv, FnBase} from "nextjs-tools";

type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	items: SelectCheckboxItem[];
	value: string[];
	onChange: FnBase<string[]>;
	containerClassName?: string;
}

interface InputAttribute {
	name: string;
}

interface InputConvenience {
	label: ReactNode;
}

export interface SelectCheckboxItem {
	label: ReactNode;
	value: string;
}

export default function ({
	items,
	value,
	onChange,
	containerClassName = "",

	// convenience
	label,

	// attribute
	name,
}: Readonly<Props>) {
	const {Label, InputHidden, Checkbox} = Base;
	const [strValue, setStrValue] = useState(getStrValue(value));

	useEffect(() => {
		setStrValue(getStrValue(value));
	}, [value]);

	useEffect(() => {
		onChange(strValue === "" ? [] : csv.split(strValue));
	}, [strValue]);

	const onChangeCheckbox = (item: string): FnBase<boolean> => {
		return (checked) => {
			checked ? setStrValue(csv.push(strValue, item)) : setStrValue(csv.pop(strValue, item));
		};
	};

	return (
		<>
			<Label>{label}</Label>

			<div className={concat(containerClassName)}>
				{items.map((item, key) => (
					<Checkbox
						key={key}
						value={csv.has(strValue, item.value)}
						onChange={onChangeCheckbox(item.value)}>
						{item.label}
					</Checkbox>
				))}
			</div>

			<InputHidden
				name={name}
				value={strValue}
			/>
		</>
	);
}

function getStrValue(value: string[]): string {
	return value.length === 0 ? "" : value.join(",");
}
