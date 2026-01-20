import {Input} from "./types";
import {regexp} from "nextjs-tools";
import {DateTime} from "luxon";

function username(): Input<string> {
	return {
		regexp: regexp.username,
		invalidMessage: "",
		parser: (str) => {
			if (!str) {
				throw new Error("no_username");
			}

			if (new RegExp(regexp.username).test(str)) {
				throw new Error(`invalid_username: value=${str}`);
			}

			return str;
		},
	};
}

function rfc3339time(): Input<Date> {
	return {
		regexp: regexp.rfc3339Time,
		parser: (str) => {
			if (!str) {
				throw new Error("no_rfc3339time");
			}
			const date = DateTime.fromISO(str);
			return date.toJSDate();
		},
	};
}
