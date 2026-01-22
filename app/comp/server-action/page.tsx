import {NextPageProps} from "nextjs-tools";
import React from "react";
import Form from "./_form";
import {Panel, PanelTitle} from "@src";

export default async function ({}: NextPageProps) {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle>Form</PanelTitle>
				<Form />
			</Panel>
		</div>
	);
}
