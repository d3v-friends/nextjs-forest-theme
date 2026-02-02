"use client";

import {createRoot} from "react-dom/client";
import Suspend from "../../comp/layout/suspend";
import {ReactNode} from "react";

export interface SuspendProps {
	wait: number;
	children: ReactNode;
}

export default function <T>(job: Promise<T>, opts: Partial<SuspendProps> = {}) {
	const cont = document.createElement("div");
	document.body.appendChild(cont);

	const root = createRoot(cont);

	const onClose = () => {
		root.unmount();
		cont.remove();
	};

	root.render(
		<Suspend
			pending={true}
			wait={opts.wait}
			children={opts.children}
		/>
	);

	job.finally(() => onClose());
}
