"use client";
import React, {ReactNode, useState} from "react";
import {Button, InputString, Panel, PanelTitle, useServerAction} from "@src";
import Form from "./form";
import Action from "./action";

interface Props {
	children?: ReactNode;
}

interface Args {
	username: string;
}

export default function ({children}: Readonly<Props>) {
	const [args, setArgs] = useState<Args>({username: ""});
	const [state, action, pending] = useServerAction(Action);
	return (
		<>
			<form action={action}>
				<InputString
					label="username"
					value={args.username}
					onChange={(username) => setArgs({...args, username})}
					{...Form.username}
				/>

				<Button type="submit">Submit</Button>
			</form>

			<PanelTitle>State</PanelTitle>
			<Panel>{JSON.stringify(state)}</Panel>
		</>
	);
}
