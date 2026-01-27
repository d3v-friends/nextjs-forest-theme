"use client";
import React, {ReactNode, useEffect, useId} from "react";
import Calendar from "../elem/calendar";
import {concat, FnBase, fnVoid, Nullable} from "nextjs-tools";
import {DateTime} from "luxon";
import {useDropdown} from "@src/hook";

interface Props extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "type" | "hidden" | "className"
> {
	value: Nullable<Date>;
	onChange: FnBase<Nullable<Date>>;
	label?: ReactNode;
	format?: string;
	timezone?: string;
	className?: string;
	close?: ReactNode;
	reset?: ReactNode;
	empty?: ReactNode;
}

export default function ({
	value,
	onChange,
	label,
	children,
	name,
	format = "yyyy-MM-dd",
	timezone = "Asia/Seoul",
	className = "mb-4",
	close = "닫기",
	reset = "초기화",
	empty = "없음",
	...attr
}: Readonly<Props>) {
	const id = useId();
	const strValue = value ? DateTime.fromJSDate(value).setZone(timezone).toFormat(format) : empty;
	const [dropdown] = useDropdown(({onClose}) => (
		<>
			<Calendar
				className="pt-4 pb-2"
				value={value}
				onChange={onChange}
			/>
			<div className="text-right">
				<button
					className="lined info mr-2"
					onClick={() => {
						onChange(null);
						onClose();
					}}>
					{reset}
				</button>
				<button
					className="outlined"
					onClick={onClose}>
					{close}
				</button>
			</div>
		</>
	));

	useEffect(() => {
		if (!value) return;
		onChange(
			DateTime.fromJSDate(value)
				.setZone(timezone)
				.set({
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0,
				})
				.toJSDate()
		);
	}, []);

	return (
		<div className={className}>
			{!!label && <label htmlFor={id}>{label}</label>}
			{!!name && (
				<input
					{...attr}
					hidden
					id={id}
					name={name}
					value={value ? value.toISOString() : ""}
					onChange={fnVoid}
				/>
			)}

			<div className="border-b border-(--border)">
				{dropdown((isOpen) => (
					<>
						<div
							className={concat("flex hover:underline h-(--elem-height) items-center")}
							suppressHydrationWarning>
							{strValue}
						</div>
					</>
				))}
			</div>
		</div>
	);
}
