"use client";
import React, {ReactNode, useEffect, useState} from "react";
import Elems from "../elems";
import Dropdown, {DropdownItem} from "../elem/dropdown";
import {FnBase, fnVoid} from "nextjs-tools";

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
}

export default function ({
	items,
	onChange,

	// convenience
	label,

	// input attribute
	name,
}: Readonly<InputProps>) {
	const [value, setValue] = useState("");
	const {Label} = Elems;

	useEffect(() => {
		onChange(value);
	}, [value]);

	return (
		<>
			<Label className="mb-1">{label}</Label>

			<Dropdown
				className="w-full"
				items={items}
				onChange={setValue}
			/>

			{name && (
				<input
					name={name}
					value={value}
					onChange={fnVoid}
					hidden
				/>
			)}
		</>
	);
}
