"use client";
import React, {ReactNode, useEffect, useId, useState} from "react";
import {Coordinate, DatePeriod, FnBase, fnVoid, initCoordinate, Nullable, Undefined} from "nextjs-tools";
import {DateTime} from "luxon";
import {useDropdown} from "@src/hook";
import Calendar from "../elem/calendar";

interface Props extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"value" | "onChange" | "type" | "hidden" | "className"
> {
	value: DatePeriod;
	onChange: FnBase<DatePeriod>;
	timezone?: string;
	label?: ReactNode;
	className?: string;
	format?: string;
}

export default function ({
	value,
	onChange,
	timezone = "Asia/Seoul",
	format = "yyyy-MM-dd",
	label,
	name,
	className,
	...attr
}: Readonly<Props>) {
	const id = useId();
	const [pos, setPos] = useState<Coordinate>(initCoordinate);
	const [fromDrop] = useDropdown(() => (
		<Calendar
			className="pt-4"
			value={value.from || null}
			onChange={(from) => onChange({...value, from: setTimezone(from, timezone)})}
		/>
	));

	const [toDrop] = useDropdown(() => (
		<Calendar
			className="pt-4"
			value={value.to || null}
			onChange={(to) => onChange({...value, to: setTimezone(to, timezone)})}
		/>
	));

	useEffect(() => {
		onChange(adjustTime({value, timezone}));
	}, []);

	const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {};

	const strValue = {
		from: value.from ? DateTime.fromJSDate(value.from).setZone(timezone).toFormat(format) : "-",
		to: value.to ? DateTime.fromJSDate(value.to).setZone(timezone).toFormat(format) : "-",
	};

	return (
		<div className={className}>
			{label && (
				<label
					className="block"
					htmlFor={id}>
					{label}
				</label>
			)}

			{name && (
				<input
					{...attr}
					hidden
					id={id}
					name={name}
					value={toInputValue(value)}
					onChange={fnVoid}
				/>
			)}

			<div className="grid grid-cols-2 gap-2 lg:gap-4">
				{fromDrop((isOpen) => (
					<Date>{strValue.from}</Date>
				))}

				{toDrop((isOpen) => (
					<Date>{strValue.to}</Date>
				))}
			</div>
		</div>
	);
}

function adjustTime({value, timezone}: Readonly<{timezone?: string; value: DatePeriod}>): DatePeriod {
	const res: DatePeriod = {};
	res.to = setTimezone(value.to, timezone);
	res.from = setTimezone(value.from, timezone);
	return res;
}

function setTimezone(value: Undefined<Date> | Nullable<Date>, timezone = "Asia/Seoul"): Undefined<Date> {
	if (!value) return undefined;

	return DateTime.fromJSDate(value)
		.setZone(timezone)
		.set({
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0,
		})
		.toJSDate();
}

function toInputValue(value: DatePeriod): string {
	let res = "";
	if (value.from) {
		res = value.from.toISOString();
	}

	if (value.to) {
		res = res + `,${value.to.toISOString()}`;
	}

	return res;
}

interface DateProps {
	children?: ReactNode;
}

function Date({children}: Readonly<DateProps>) {
	return (
		<div className="border-b border-(--border) h-(--elem-height) flex items-center hover:underline">{children}</div>
	);
}
