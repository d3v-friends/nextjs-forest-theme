"use client";
import React, {ReactNode} from "react";
import Base from "../base";
import {FnBase, fnVoid} from "nextjs-tools";

type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	children?: ReactNode;
	className?: string;
	value: boolean;
	onChange: FnBase<boolean>;
}

interface InputAttribute {
	name: string;
}

interface InputConvenience {
	label: ReactNode;
}

export default function ({
	children = "",
	className = "mb-4",
	value,
	onChange,

	// attribute
	name,

	// convenience
	label,
}: Readonly<Props>) {
	const {Label, Checkbox} = Base;
	return (
		<div className={className}>
			<Label>{label}</Label>
			<Checkbox
				value={value}
				onChange={onChange}>
				{children}
			</Checkbox>

			{name && (
				<input
					hidden
					type="checkbox"
					value={value ? "true" : "false"}
					name={name}
					onChange={fnVoid}
				/>
			)}
		</div>
	);
}
