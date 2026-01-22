"use server";
import {serverFunction} from "@src";
import form from "./form";

export default async function (_: any, formData: FormData) {
	return serverFunction(formData, form, async ({username}) => {
		return "success";
	});
}
