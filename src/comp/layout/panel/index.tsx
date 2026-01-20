import React, {ReactNode} from "react";
import {cls} from "../../..";
import {concat} from "nextjs-tools";

interface Props {
	children?: ReactNode;
	className?: string;
}

export default function ({children, className = ""}: Readonly<Props>) {
	return (
		<section className={concat(cls.shadow.normal, "w-full border border-(--border) p-5", className)}>
			{children}
		</section>
	);
}
