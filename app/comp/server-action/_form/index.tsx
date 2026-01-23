"use client";
import React, {ReactNode, useState} from "react";
import {InputBase, Panel, PanelTitle, useServerAction} from "@src";
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
				<InputBase
					label="username"
					value={args.username}
					onChange={(username) => setArgs({...args, username})}
					name={Form.username.name}
					regexp={Form.username.regexp}
					invalidMessage={Form.username.invalidMessage}
					required
				/>

				<button
					className="filled"
					type="submit">
					Submit
				</button>
			</form>

			<PanelTitle>State</PanelTitle>
			<Panel>{JSON.stringify(state)}</Panel>
		</>
	);
}
