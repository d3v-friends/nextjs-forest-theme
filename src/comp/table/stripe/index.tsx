import React, {ReactNode} from "react";
import {concat} from "nextjs-tools";

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
	children: ReactNode[];
}

export default function ({children = [], className, ...attr}: Readonly<Props>) {
	return (
		<div
			className={className}
			{...attr}>
			{children.map((value, key) => (
				<div
					key={key}
					className={concat("rounded-xl p-4", key % 2 === 0 ? "bg-(--table-stripe)" : "")}>
					{value}
				</div>
			))}
		</div>
	);
}
