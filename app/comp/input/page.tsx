"use server";
import {NextPageProps} from "nextjs-tools";
import React from "react";
import Style from "./_style";

export default async function ({searchParams}: NextPageProps) {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Style />
		</div>
	);
}
