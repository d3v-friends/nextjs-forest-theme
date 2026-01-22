import {FormType, Input, InputParser, InputProperty} from "./types";
import {regexp} from "nextjs-tools";
import {DateTime} from "luxon";

function username(i: InputProperty = {}): Input<string> {
	return {
		regexp: regexp.username,
		invalidMessage: "영문소문자로 시작하고 4자리이상 20자리 이하로 입력하여 주십시오.",
		parser: (str) => {
			if (!str) {
				throw new Error("no_username");
			}

			if (!new RegExp(regexp.username).test(str)) {
				throw new Error(`invalid_username: value=${str}`);
			}

			return str;
		},
		...i,
	};
}

function rfc3339time(i: InputProperty = {}): Input<Date> {
	return {
		regexp: regexp.rfc3339Time,
		invalidMessage: "2000-01-01T00:00:00Z 형식으로 입력하여 주십시오.",
		parser: (str) => {
			if (!str) {
				throw new Error("no_rfc3339time");
			}
			const date = DateTime.fromISO(str);
			return date.toJSDate();
		},
		...i,
	};
}

function field<T>(parser: InputParser<T>, i: InputProperty = {}): Input<T> {
	return {
		...i,
		parser,
	};
}

function create<I extends object>(form: FormType<I>): FormType<I> {
	for (const name in form) {
		form[name].name = name;
	}
	return form;
}

const v = create({
	username: username(),
	time: rfc3339time(),
});

export default {
	create,
	username,
	rfc3339time,
	field,
};
