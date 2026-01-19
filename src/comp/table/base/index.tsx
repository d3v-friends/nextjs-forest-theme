"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {getSorter, OnMouseUpTable, TableItem, TableSort, toggleSort} from "../types";
import {concat, fnVoid, useRouterTools} from "nextjs-tools";
import {cls} from "@src/fn";
import ImgUpCaret from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDownCaret from "web-asset/svg/regular/fi-rr-caret-down.svg";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import Image from "next/image";
import {useSearchParams} from "next/navigation";

interface Props<T> {
	columns: Partial<TableItem<T>>[];
	list: T[];
	className: string;
	// click
	onClick: OnMouseUpTable<T>;
	// middle click
	onMiddleClick: OnMouseUpTable<T>;
}

export default function <T>({
	columns = [],
	list = [],
	className = "w-full mb-8",
	onClick = fnVoid,
	onMiddleClick = fnVoid,
}: Readonly<Partial<Props<T>>>) {
	return (
		<table className={concat(cls.border.bottom, className)}>
			<Thead columns={columns} />
			<Tbody
				className={className}
				columns={columns}
				onClick={onClick}
				onMiddleClick={onMiddleClick}
				list={list}
			/>
		</table>
	);
}

function Tbody<T>({columns, list, onClick, onMiddleClick}: Readonly<Props<T>>) {
	return (
		<tbody>
			{list.map((row, k1) => (
				<TbodyTr
					key={k1}
					onClick={onClick}
					onMiddleClick={onMiddleClick}
					row={row}>
					{columns.map((col, k2) => (
						<TbodyTd
							key={k2}
							column={col}>
							{row}
						</TbodyTd>
					))}
				</TbodyTr>
			))}
		</tbody>
	);
}

function TbodyTr<T>({
	children,
	onClick,
	onMiddleClick,
	row,
}: Readonly<{children: ReactNode; onClick: OnMouseUpTable<T>; onMiddleClick: OnMouseUpTable<T>; row: T}>) {
	const onMouseUp: React.MouseEventHandler<HTMLTableRowElement> = (e) => {
		switch (e.button) {
			case 0:
				// left-click
				onClick(e, row);
				break;
			case 1:
				// middle click
				onMiddleClick(e, row);
				break;
		}
	};

	return (
		<tr
			className={concat("group")}
			onMouseUp={onMouseUp}>
			{children}
		</tr>
	);
}

function TbodyTd<T>({children, column}: Readonly<{children: T; column: Partial<TableItem<T>>}>) {
	const {classNames, row} = column;
	const {tbody = "text-center"} = classNames || {};

	if (!row) return <td className={concat(tbody)} />;

	return (
		<td className={concat(cls.border.bottom, "pt-2 pb-2 h-16", "group-hover:bg-(--panel)", tbody)}>
			{row(children)}
		</td>
	);
}

function Thead<T>({columns}: Readonly<{columns: Partial<TableItem<T>>[]}>) {
	return (
		<thead className={concat(cls.border.bottom)}>
			<tr>
				{columns.map((v, key) => (
					<TheadTd
						key={key}
						item={v}
					/>
				))}
			</tr>
		</thead>
	);
}

function TheadTd<T>({item}: Readonly<{item: Partial<TableItem<T>>}>) {
	const {classNames} = item;
	const {thead = "text-center"} = classNames || {};
	return (
		<td className={concat(thead, "pt-2 pb-2  text-(--info) text-sm")}>
			<TheadLabel item={item} />
		</td>
	);
}

function TheadLabel<T>({item}: Readonly<{item: Partial<TableItem<T>>}>) {
	const router = useRouterTools();

	const {label, key} = item;
	if (!key) return label;

	const param = useSearchParams();
	const [sort, setSort] = useState(getSorter(param.get(key) || ""));

	useEffect(() => {
		setSort(getSorter(param.get(key) || ""));
	}, [param]);

	let icon = ImgDash;
	switch (sort) {
		case "asc":
			icon = ImgUpCaret;
			break;
		case "desc":
			icon = ImgDownCaret;
			break;
	}

	const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		router.pushBySearchParams({[key]: toggleSort(sort)});
	};

	const imgColor: Record<TableSort, string> = {
		asc: "filter-(--danger-filter)",
		desc: "filter-(--success-filter)",
		none: "filter-(--info-filter)",
	};

	return (
		<button
			type="button"
			className={concat("inline-flex items-center")}
			onClick={onClick}>
			<Image
				className={concat("w-5 mr-1", imgColor[sort])}
				src={icon}
				alt="caret"
				width={20}
				height={20}
			/>
			{label}
		</button>
	);
}
