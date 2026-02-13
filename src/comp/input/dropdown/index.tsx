"use client";
import React, {ReactNode, useId} from "react";
import Dropdown, {DropdownItem} from "../elem/dropdown";
import {concat, FnBase, fnVoid} from "nextjs-tools";

interface Props<T extends string> extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "hidden"
> {
	value: string;
	onChange: FnBase<string>;
	items: DropdownItem<T>[];
	label?: ReactNode;
}

export default function <T extends string>({
	value,
	items,
	onChange,

	// convenience
	label,
	className = "mb-4",

	// input attribute
	name,
	...attr
}: Readonly<Props<T>>) {
	const id = useId();

	return (
		<div className={concat("input-container", className)}>
			{!!label && <label htmlFor={id}>{label}</label>}

			<Dropdown
				className="w-full"
				items={items}
				value={value}
				onChange={onChange}
			/>

			{!!name && (
				<input
					{...attr}
					hidden
					id={id}
					name={name}
					value={value}
					onChange={fnVoid}
				/>
			)}
		</div>
	);
}
