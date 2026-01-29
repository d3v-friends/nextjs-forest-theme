import {NextPageProps} from "nextjs-tools";
import React from "react";
import Form from "./_form";

export default async function ({}: NextPageProps) {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Form</h3>
				<Form />
			</section>
		</div>
	);
}
