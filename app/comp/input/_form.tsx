"use client";
import React, {ReactNode, useState} from "react";
import {Button, InputCheckbox, InputDropdown, InputNumber, InputSelectCheckbox, InputString, Panel} from "@src";

interface Props {
	children?: ReactNode;
}

interface Args {
	name: string;
	age: number;
	decimal: number;
	unit: string;
	select: string[];
	checkbox: boolean;
}

export default function ({children}: Readonly<Props>) {
	const [state, setState] = useState<Args>({
		name: "",
		age: 0,
		decimal: 0.0,
		unit: "",
		select: [],
		checkbox: false,
	});

	return (
		<>
			<Panel className="mb-4">{JSON.stringify(state)}</Panel>

			<InputString
				label="name"
				value={state.name}
				onChange={(name) => setState({...state, name})}
			/>

			<InputString
				label="name with button"
				value={state.name}
				onChange={(name) => setState({...state, name})}
				right={<Button>Hello</Button>}
			/>

			<InputString
				label="name with onKeyEnter"
				value={state.name}
				onChange={(name) => setState({...state, name})}
				onKeyEnter={(str) => alert(str)}
			/>

			<InputNumber
				label="age"
				value={state.age}
				onChange={(age) => setState({...state, age})}
			/>

			<InputNumber
				label="decimal"
				numberType="decimal"
				value={state.decimal}
				onChange={(decimal) => setState({...state, decimal})}
			/>

			<InputDropdown
				label="dropdown"
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

			<InputCheckbox
				label="checkbox"
				value={state.checkbox}
				onChange={(checkbox) => setState({...state, checkbox})}>
				apply
			</InputCheckbox>
		</>
	);
}
