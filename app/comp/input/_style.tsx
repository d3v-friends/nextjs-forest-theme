"use client";
import React, {useState} from "react";
import {InputBase, InputCheckbox, InputDate, InputDropdown, InputNumber, InputSelectCheckbox} from "@src";
import {Nullable, regexp} from "nextjs-tools";

interface Args {
	name: string;
	age: Nullable<number>;
	check: boolean;
	unit: string;
	select: string[];
	date: Nullable<Date>;
}
export default function () {
	const [state, setState] = useState<Args>({
		name: "",
		age: 0,
		check: false,
		unit: "10",
		select: [],
		date: new Date(),
	});

	return (
		<section>
			<h3>style</h3>
			<InputBase
				label="name"
				value={state.name}
				onChange={(name) => setState({...state, name})}
				regexp={regexp.username}
				invalidMessage="이름을 확인하여 주십시오."
			/>

			<InputBase
				label="aside button"
				value={state.name}
				onChange={(name) => setState({...state, name})}
				regexp={regexp.username}
				invalidMessage="이름을 확인하여 주십시오.">
				<button className="filled">Button</button>
			</InputBase>

			<InputNumber
				label="number"
				value={state.age}
				onChange={(age) => setState({...state, age})}>
				<button className="filled">Button</button>
			</InputNumber>

			<InputCheckbox
				label="checkbox"
				name="check"
				value={state.check}
				onChange={(_, check) => setState({...state, check})}>
				Apply
			</InputCheckbox>

			<InputDropdown
				name="dropdown"
				label="dropdown"
				value={state.unit}
				items={[
					{label: "10 개", value: "10"},
					{label: "20 개", value: "20"},
					{label: "30 개", value: "30"},
					{label: "40 개", value: "40"},
					{label: "50 개", value: "50"},
				]}
				onChange={(unit) => setState({...state, unit})}
			/>

			<InputSelectCheckbox
				name="select"
				label="select checkbox"
				value={state.select}
				onChange={(select) => setState({...state, select})}
				items={[
					{label: "10 개", value: "10"},
					{label: "20 개", value: "20"},
					{label: "30 개", value: "30"},
					{label: "40 개", value: "40"},
					{label: "50 개", value: "50"},
				]}
			/>

			<InputDate
				label="date"
				name="date"
				value={state.date}
				onChange={(date) => setState({...state, date})}
			/>
		</section>
	);
}
