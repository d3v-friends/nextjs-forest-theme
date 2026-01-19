"use client";
import React from "react";
import {concat, useRouterTools} from "nextjs-tools";
import Items from "./items";
import {useSearchParams} from "next/navigation";
import strconv from "../../../fn/strconv";
import Dropdown from "../../input/elem/dropdown";

interface Props {
	page: number;
	size: number;
	total: number;
	pageKey?: string;
	sizeKey?: string;
	className?: string;
	buttons?: number;
}

const {LinkButton, Prev, Next} = Items;

export default function ({
	page,
	size,
	total,
	pageKey = "page",
	sizeKey = "size",
	className = "",
	buttons = 2,
}: Readonly<Props>) {
	if (total === 0) return <>NULL_TOTAL</>;
	if (size === 0) return <>NULL_SIZE</>;

	const params = useSearchParams();
	const router = useRouterTools();

	const last = Math.floor(total / size) + (0 < total % size ? 1 : 0) - 1;
	const left: number[] = [];
	const right: number[] = [];

	for (let i = 1; i <= buttons; i++) {
		if (0 <= page - i) {
			left.push(page - i);
		}

		if (page + i <= last) {
			right.push(page + i);
		}
	}

	const items = [...left, page, ...right].sort((a, b) => a - b);
	const hasPrev = items.findIndex((v) => v === 0) === -1;
	const hasNext = items.findIndex((v) => v === last) === -1;

	return (
		<div className={concat("flex items-center", className)}>
			<Dropdown
				items={[
					{label: "10 개", value: "10"},
					{label: "30 개", value: "30"},
					{label: "50 개", value: "50"},
				]}
				onChange={(value) => {
					router.pushBySearchParams({[sizeKey]: value});
				}}
				value={params.get(sizeKey) || "10"}
			/>
			<div className="text-(--info) pl-2">전체 {strconv.toSplitNumber(total)}</div>
			<div className="grow" />

			<Prev
				href={getHref(params.toString(), pageKey, page - buttons - 1)}
				activated={hasPrev}
			/>
			{items.map((value, key) => (
				<LinkButton
					href={getHref(params.toString(), pageKey, value)}
					key={key}
					activated={value === page}>
					{value + 1}
				</LinkButton>
			))}

			<Next
				href={getHref(params.toString(), pageKey, page + buttons + 1)}
				activated={hasNext}
			/>
		</div>
	);
}

function getHref(params: string, key: string, value: number): string {
	const next = new URLSearchParams(params);
	next.set(key, value.toString());
	return `?${next.toString()}`;
}
