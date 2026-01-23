"use server";
import React from "react";
import {Panel, PanelTitle} from "@src";
import Table from "./_table";
import {getSearchParams, NextPageProps, searchParamsParser} from "nextjs-tools";

export default async function ({searchParams}: NextPageProps) {
	const {page, size} = await getSearchParams(searchParams, {
		page: searchParamsParser.pagination(0),
		size: searchParamsParser.pagination(10),
	});

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle>Table</PanelTitle>
				<Table
					page={page}
					size={size}
				/>
			</Panel>
		</div>
	);
}
