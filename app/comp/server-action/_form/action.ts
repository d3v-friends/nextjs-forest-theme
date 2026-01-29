"use server";

import form from "./form";
import {serverFunction} from "nextjs-tools";

export default async function (_: any, formData: FormData) {
	return serverFunction(formData, form, async ({username}) => {
		return "success";
	});
}
