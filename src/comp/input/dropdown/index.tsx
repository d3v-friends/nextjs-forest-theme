"use client";
import React, {ReactNode, useEffect, useState} from "react";
import Elems from "../base";
import Dropdown, {DropdownItem} from "../elem/dropdown";
import {FnBase} from "nextjs-tools";

type InputProps = Props & Partial<InputAttribute> & Partial<InputConvenience>;

interface Props {
	items: DropdownItem[];
	onChange: FnBase<string>;
}

interface InputAttribute {
	name: string;
}

interface InputConvenience {
	label: ReactNode;
	className: string;
}

export default function ({
	items,
	onChange,

	// convenience
	label,
	className = "mb-4",

	// input attribute
	name,
}: Readonly<InputProps>) {
	const [value, setValue] = useState("");
	const {Label, InputHidden} = Elems;

	useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<div className={className}>
			<Label className="mb-1">{label}</Label>

			<Dropdown
				className="w-full"
				items={items}
				onChange={setValue}
			/>

			<InputHidden
				value={value}
				name={name}
			/>
		</div>
	);
}
