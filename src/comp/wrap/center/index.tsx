import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function ({className, ...attr}: Readonly<Partial<Props>>) {
	const elem = (
		<div
			className="w-full h-full flex justify-center items-center"
			{...attr}
		/>
	);

	return className ? <div className={className}>{elem}</div> : elem;
}
