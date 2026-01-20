"use client";
import React, {useEffect, useRef, useState} from "react";
import {
	Button,
	InputCheckbox,
	InputDropdown,
	InputNumber,
	InputSelectCheckbox,
	InputString,
	Panel,
	PanelTitle,
} from "@src";

interface Props {}

interface Args {
	name: string;
	age: number;
	decimal: number;
	unit: string;
	select: string[];
	checkbox: boolean;
}

export default function ({}: Readonly<Props>) {
	const [state, setState] = useState<Args>({
		name: "",
		age: 0,
		decimal: 0.0,
		unit: "",
		select: [],
		checkbox: false,
	});

	const [formStr, setFormStr] = useState("-");

	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (!formRef.current) return;
		setFormStr(toStringFormData(new FormData(formRef.current)));
	}, [state]);

	return (
		<>
			<form ref={formRef}>
				<InputString
					label="name"
					name="name"
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
					name="age"
					label="age"
					value={state.age}
					onChange={(age) => setState({...state, age})}
				/>

				<InputNumber
					name="decimal"
					label="decimal"
					numberType="decimal"
					value={state.decimal}
					onChange={(decimal) => setState({...state, decimal})}
				/>

				<InputDropdown
					name="dropdown"
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

				<InputCheckbox
					name="checkbox"
					label="checkbox"
					value={state.checkbox}
					onChange={(checkbox) => setState({...state, checkbox})}>
					apply
				</InputCheckbox>
			</form>

			<hr />

			<div className="h-20" />
			<PanelTitle>State</PanelTitle>
			<Panel className="mb-4">{JSON.stringify(state)}</Panel>

			<PanelTitle>FormData</PanelTitle>
			<Panel className="mb-4">{formStr}</Panel>
		</>
	);
}

function toStringFormData(data: FormData): string {
	const next: Record<string, string> = {};
	for (const name of data.keys()) {
		const entry = data.get(name);
		if (!entry) {
			next[name] = "";
		}

		switch (typeof entry) {
			case "string":
				next[name] = entry;
				break;
			default:
				next[name] = JSON.stringify(entry);
		}
	}
	return JSON.stringify(next);
}
