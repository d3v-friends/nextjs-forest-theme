"use client";
import AlertPromise, {AlertPromiseOptions} from "../modal-promise/alert";
import {ReactNode} from "react";
import {createRoot} from "react-dom/client";
import Suspend from "../../comp/layout/suspend";
import {SuspendProps} from "@src/fn/suspend";

declare global {
	interface Promise<T> {
		alert(book: Record<string, ReactNode>, opts?: Partial<AlertPromiseOptions>): void;
		suspend<TResult1 = T>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			opts?: Partial<SuspendProps>
		): Promise<TResult1>;
	}
}

Promise.prototype.alert = function (book: Record<string, ReactNode>, opts: Partial<AlertPromiseOptions> = {}) {
	this.catch((e) => {
		const message = e instanceof Error ? e.message : JSON.stringify(e);

		for (const key in book) {
			if (!message.includes(key)) continue;
			if (!book[key]) return;

			return AlertPromise(book[key], opts);
		}

		return AlertPromise(message, opts);
	});
};

Promise.prototype.suspend = function <T, TResult1 = T>(
	onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
	opts: Partial<SuspendProps> = {}
): Promise<TResult1> {
	return this.then(async (value) => {
		const cont = document.createElement("div");
		document.body.appendChild(cont);

		const root = createRoot(cont);

		root.render(
			<Suspend
				pending={true}
				wait={opts.wait}
				children={opts.children}
			/>
		);

		const defer = () => ({
			[Symbol.dispose]: () => {
				root.unmount();
				cont.remove();
			},
		});

		{
			using _ = defer();
			return onfulfilled ? await onfulfilled(value) : (value as unknown as TResult1);
		}
	});
};

export default function () {
	return null;
}
