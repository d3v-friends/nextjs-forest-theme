"use server";
import Form from "./form";
import {sleep, UnwrapForm, unwrapForm} from "nextjs-tools";

export default async function (args: UnwrapForm<typeof Form>) {
	await unwrapForm(Form, args);
	await sleep(5000);
	return args.username;
}
