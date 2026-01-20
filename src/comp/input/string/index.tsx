"use client";
import React, {HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";
import Elems from "../base";
import {DefaultInputInterceptor, HTMLInputModeAttribute, InputInterceptor} from "../types";
import {concat, FnBase} from "nextjs-tools";

type Props = InputProps & Partial<InputAttribute> & Partial<InputConvenience>;

interface InputProps {
	value: string;
	onChange: (v: string) => void;
	label?: ReactNode;
	className?: string;
}

interface InputConvenience {
	invalidMessage: ReactNode;
	regexp: RegExp | string;
	interceptor: InputInterceptor;
	onBlurInterceptor: InputInterceptor;
	onKeyEnter: FnBase<string>;
	right: ReactNode;
}

interface InputAttribute {
	name: string;
	disabled: boolean;
	required: boolean;
	placeholder: string;
	inputMode: HTMLInputModeAttribute;
	type: HTMLInputTypeAttribute;
}

export default function ({
	value,
	onChange,
	label,
	className = "w-full mb-4",

	// convenience
	invalidMessage,
	regexp,
	interceptor = DefaultInputInterceptor,
	onBlurInterceptor = DefaultInputInterceptor,
	onKeyEnter,
	right,

	// attributes
	name,
	disabled = false,
	required = false,
	placeholder,
	inputMode,
	type,
}: Readonly<Props>) {
	const [isFocus, setIsFocus] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);
	const {Label, InvalidMessage, Container, InputRight} = Elems;

	useEffect(() => {
		if (!regexp) return;
		if (value === "") {
			setIsInvalid(false);
			return;
		}
		setIsInvalid(!new RegExp(regexp).test(value));
	}, [value]);

	const focusKey = isFocus ? "focus" : "noFocus";

	const onKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (!onKeyEnter) return;
		if (e.key !== "Enter") return;
		onKeyEnter(value);
	};

	return (
		<div className={className}>
			<Label isFocus={isFocus}>{label}</Label>
			<div className="flex w-full items-baseline">
				<Container
					isFocus={isFocus}
					isInvalid={isInvalid}>
					<input
						className={concat("outline-none w-full", CSS.input[focusKey])}
						{...{name, disabled, required, placeholder, inputMode, type}}
						value={value}
						onChange={(e) => onChange(interceptor(e))}
						onFocus={() => setIsFocus(true)}
						onBlur={(e) => {
							setIsFocus(false);
							onChange(onBlurInterceptor(e));
						}}
						onKeyUp={onKeyUp}
					/>
				</Container>
				<InputRight>{right}</InputRight>
			</div>

			<InvalidMessage
				isInvalid={isInvalid}
				children={invalidMessage}
			/>
		</div>
	);
}

const CSS = {
	inputCont: {
		focus: "border-(--border-active)",
		noFocus: "border-(--border)",
	},
	input: {
		focus: "",
		noFocus: "",
	},
};
