import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
}

export default function ({children}: Readonly<Partial<Props>>) {
	return (
		<div
			className="bg-(--modal) rounded shadow-2xl shadow-(--shadow) min-w-80"
			onMouseUp={(e) => e.stopPropagation()}>
			{children}
		</div>
	);
}
