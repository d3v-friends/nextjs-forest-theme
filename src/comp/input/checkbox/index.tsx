"use client";
import React, {ReactNode, useId} from "react";
import {concat, fnVoid} from "nextjs-tools";
import Checkbox from "../elem/checkbox";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "hidden"> {
	value: boolean;
	onChange: (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => void;
	label?: ReactNode;
}

export default function ({name, value, onChange, children, label, className = "", ...attr}: Readonly<Props>) {
	const id = useId();

	return (
		<div className={concat("input-container", className)}>
			{label && <label htmlFor={id}>{label}</label>}

			<Checkbox
				value={value}
				onChange={onChange}>
				{children}
			</Checkbox>

			{name && (
				<input
					{...attr}
					hidden
					id={id}
					name={name}
					value={value ? "true" : "false"}
					onChange={fnVoid}
				/>
			)}
		</div>
	);
}
