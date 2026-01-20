"use server";
import {NextPageProps} from "nextjs-tools";
import React from "react";
import {Panel, PanelTitle} from "@src";
import Form from "./_form";

export default async function ({searchParams}: NextPageProps) {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle>Input</PanelTitle>
				<Form />
			</Panel>
		</div>
	);
}
