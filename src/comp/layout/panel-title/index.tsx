import React, {ReactNode} from "react";
import {cls} from "../../..";
import {concat} from "nextjs-tools";

interface Props {
	className?: string;
	children?: ReactNode;
	right?: ReactNode;
}

export default function ({children, right, className = "mb-3"}: Readonly<Props>) {
	return (
		<div className={className}>
			<div className={concat("flex items-center")}>
				<div className={concat(cls.text.title, "text-2xl font-bold")}>{children}</div>
				<Right>{right}</Right>
			</div>
		</div>
	);
}

function Right({children}: Readonly<{children?: ReactNode}>) {
	if (!children) return null;
	return (
		<>
			<div className="grow" />
			{children}
		</>
	);
}
