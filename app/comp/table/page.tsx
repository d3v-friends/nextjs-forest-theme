"use server";
import React from "react";
import Table from "./_table";
import {getSearchParams, NextPageProps, searchParamsParser} from "nextjs-tools";
import KeyValue from "./_key-value";
import Stripe from "./_stripe";
import Empty from "./_empty";

export default async function ({searchParams}: NextPageProps) {
	const {page, size} = await getSearchParams(searchParams, {
		page: searchParamsParser.pagination(0),
		size: searchParamsParser.pagination(10),
	});

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Table</h3>
				<Table
					page={page}
					size={size}
				/>
			</section>

			<section>
				<h3>Empty</h3>
				<Empty />
			</section>

			<section>
				<h3>Key-value</h3>
				<KeyValue />
			</section>

			<section>
				<h3>Stripe</h3>
				<Stripe />
			</section>
		</div>
	);
}
