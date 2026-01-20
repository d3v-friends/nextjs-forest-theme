import {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute} from "react";
import {HTMLInputModeAttribute} from "../../comp/input/types";
import {Nullable} from "nextjs-tools";

type ResultType = "string" | "integer" | "decimal" | "strings" | "integers" | "decimals";

type InputProperty = Partial<InputParser> & Partial<InputAttribute>;

type InputParser = {
	regexp: RegExp | string;
	resultType: ResultType;
	invalidMessage: string;
};

type InputAttribute = {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	inputMode: HTMLInputModeAttribute;
	type: HTMLInputTypeAttribute;
	autoComplete: HTMLInputAutoCompleteAttribute;
};

export type Input<T> = Partial<InputParser> &
	Partial<InputAttribute> & {
		parser: (str: Nullable<string>) => T;
	};

export type FormType<T extends object> = {
	[KEY in keyof T]: Input<T[KEY]>;
};

// I = input parameter
// R = response
// server-action 에서 사용하는 데이터. 함수, 오브젝트등 사용하면 클라이언트 사이드로 전달이 안된다.
// stringify 되는 값만 전달 가능
export interface ServerActionState<I, R> {
	// 서버액션이 실행된 시간
	time: number;
	// 실행된 후 결과값
	response: R;
	// 입력값
	input: I;
	error?: string;
}

// I = input parameter
// R = response
export type ServerActionHandler<I, R> = (parameter: I) => Promise<R>;

function newForm<T extends object>(form: FormType<T>): FormType<T> {
	return form;
}
