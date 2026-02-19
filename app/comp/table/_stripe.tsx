"use client";
import React, {ReactNode} from "react";
import {Stripe} from "@src";

interface Props {
	children: ReactNode;
}

export default function ({children}: Readonly<Partial<Props>>) {
	return (
		<Stripe>
			{[1, 2, 3, 4, 5, 6].map((value, key) => (
				<div key={key}>{value}</div>
			))}
		</Stripe>
	);
}
