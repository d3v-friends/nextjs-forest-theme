import {getSearchParams, NextPageProps, searchParamsParser} from "nextjs-tools";
import React from "react";
import {IconHeader} from "@src";
import ImgTab from "web-asset/svg/regular/fi-rr-circle-2.svg";

export default async function ({searchParams}: NextPageProps) {
	const {page, size} = await getSearchParams(searchParams, {
		page: searchParamsParser.pagination(0),
		size: searchParamsParser.pagination(20),
	});

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<IconHeader
				icon={ImgTab}
				label="second page">
				Page
			</IconHeader>
		</div>
	);
}
