import {NextPageProps} from "nextjs-tools";
import React from "react";
import {Enum, EnumItem} from "@src";

export default async function ({searchParams}: NextPageProps) {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h4 className="primary">Enum</h4>
				<div className="grid grid-cols-5 gap-2 lg:gap-4">
					{ITEMS.map((value, key) => (
						<Enum
							key={key}
							value={value.value}
							items={ITEMS}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

const ITEMS: EnumItem<string>[] = [
	{
		label: "primary",
		color: "primary",
		value: "primary",
	},
	{
		label: "success",
		color: "success",
		value: "success",
	},
	{
		label: "warning",
		color: "warning",
		value: "warning",
	},
	{
		label: "danger",
		color: "danger",
		value: "danger",
	},
	{
		label: "info",
		color: "info",
		value: "info",
	},
];
