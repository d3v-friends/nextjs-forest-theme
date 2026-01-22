"use client";
import React, {ReactNode, RefObject, useRef} from "react";
import {ServerAction, ServerActionState, useServerAction} from "@src";
import Suspend from "../../comp/layout/suspend";

type Wrapper = (children: ReactNode) => ReactNode;
type Response<I, R> = [Wrapper, RefObject<HTMLFormElement | null>, ServerActionState<I, R>, boolean];

interface Options<R> {
	suspend?: ReactNode;
	success?: {
		title?: ReactNode;
		content?: (res: R) => ReactNode;
		okHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	};
	failed?: {
		title?: ReactNode;
		content?: (res: R) => ReactNode;
		okHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	};
}

export default function <I, R>(args: ServerAction<I, R>, opts: Options<R> = {}): Response<I, R> {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, action, pending] = useServerAction(args);
	const {suspend} = opts;

	return [
		(children) => (
			<>
				<form
					ref={formRef}
					action={action}>
					{children}
				</form>

				<Suspend pending={pending}>{suspend}</Suspend>
			</>
		),
		formRef,
		state,
		pending,
	];
}
