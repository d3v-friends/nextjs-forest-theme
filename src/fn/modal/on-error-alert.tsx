"use client";
import {FnBase} from "nextjs-tools";
import alert, {AlertOptions} from "./alert";

export default function (book: Record<string, string>, opts: Partial<AlertOptions> = {}): FnBase<any> {
	return (value) => {
		if (!(value instanceof Error)) {
			alert(value);
		}

		for (let message in book) {
			if (!value.message.includes(message)) {
				continue;
			}
			alert(book[message], opts);
			return;
		}
	};
}
