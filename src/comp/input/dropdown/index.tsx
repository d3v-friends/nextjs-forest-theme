"use client";
import React, {ReactNode} from "react";

type InputProps = Props & Partial<InputAttribute>;

interface Props {
	children?: ReactNode;
}

interface InputAttribute {
	name: string;
}

export default function ({
	children,
	// input attribute
	name,
}: Readonly<InputProps>) {
	return (
		<>
			{name && (
				<input
					name={name}
					hidden
				/>
			)}
		</>
	);
}
