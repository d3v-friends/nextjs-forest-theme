"use server";
import serverFunction from "./server-function";

export default async function (formData: FormData) {
	return serverFunction(formData, {}, async () => {
		return "success";
	});
}
