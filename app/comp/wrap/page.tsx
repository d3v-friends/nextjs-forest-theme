import {getSearchParams, NextPageProps, searchParamsParser} from "nextjs-tools";
import React from "react";
import {Direction, IconHeader, Tooltip} from "@src";
import ImgTooltip from "web-asset/svg/regular/fi-rr-message-quote.svg";

const Tops: Direction[] = ["top", "left", "right", "bottom"];

export default async function ({searchParams}: NextPageProps) {
	const {page, size} = await getSearchParams(searchParams, {
		page: searchParamsParser.pagination(0),
		size: searchParamsParser.pagination(20),
	});

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<IconHeader
					icon={ImgTooltip}
					label="mouse over">
					Tooltip
				</IconHeader>
				<div className="grid grid-cols-4 gap-2 lg:gap-4">
					{Tops.map((direction, key) => (
						<Tooltip
							key={key}
							tooltip="tooltip"
							direction={direction}>
							<button className="filled w-full">{direction}</button>
						</Tooltip>
					))}
				</div>
			</section>
		</div>
	);
}
