"use client";
import React from "react";
import Form from "./_form/form";
import {alert, InputBase, suspend} from "@src";
import {useFormState} from "nextjs-tools";
import Action from "./_form/action";

export default function () {
	const [args, onChangeArgs] = useFormState<typeof Form>({
		username: "",
	});

	const onSubmit = () => {
		suspend(
			Action(args)
				.then(() => alert("success"))
				.catch((err) => console.error(err))
		);
	};

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Server form</h3>
				<InputBase
					label="username"
					value={args.username}
					onChange={(username) => onChangeArgs({...args, username})}
					name={Form.username.name}
					regexp={Form.username.regexp}
					invalidMessage={Form.username.invalidMessage}
					required
				/>

				<button
					className="outlined"
					onClick={onSubmit}>
					Submit
				</button>
			</section>
		</div>
	);
}
