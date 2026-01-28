"use server";

import {cookies} from "next/headers";
import {StringBoolean} from "../../..";

const ASIDE_STATUS_KEY = "aside_status";

export async function getAsideStatus(): Promise<StringBoolean> {
	const c = await cookies();
	const res = c.get(ASIDE_STATUS_KEY);
	if (res) {
		return res.value === "true" ? "true" : "false";
	}
	return "true";
}

export async function setAsideStatus(status: StringBoolean) {
	const c = await cookies();
	c.set(ASIDE_STATUS_KEY, status);
}
