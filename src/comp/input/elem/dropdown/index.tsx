"use client";
import React, {ReactNode, useState} from "react";
import cls from "../../../../fn/class-names";
import {concat, FnBase, FnVoid, fnVoid} from "nextjs-tools";
import ImgDown from "web-asset/svg/regular/fi-rr-caret-down.svg";
import ImgUp from "web-asset/svg/regular/fi-rr-caret-up.svg";
import Image from "next/image";
import {useDropdown} from "@src";

interface Props<T extends string> {
	items: DropdownItem<T>[];
	value: T;
	onChange: (value: T) => void;
	className: string;
}

export interface DropdownItem<T> {
	label: ReactNode;
	value: T;
}

export default function <T extends string>({
	items = [] as DropdownItem<T>[],
	value = "" as T,
	onChange = fnVoid,
	className,
}: Readonly<Partial<Props<T>>>) {
	const [idx, setIdx] = useState(getIndex(items, value));
	const [dropdown] = useDropdown(
		({width, onClose}) => (
			<Dropdown
				width={width}
				items={items}
				idx={idx}
				onChangeIdx={(next) => {
					setIdx(next);
					onChange(items[next].value);
				}}
				onClose={onClose}
			/>
		),
		{
			className,
		}
	);

	if (items.length === 0) return null;

	const item = items[idx];
	return dropdown((isOpen) => (
		<div
			className={concat(
				cls.height.input,
				"border border-(--border) rounded p-2",
				"flex items-center text-sm text-(--info)",
				"min-w-20",
				isOpen ? cls.background.input : ""
			)}>
			{item.label}
			<div className="grow" />
			<Image
				className="filter-(--info-filter) ml-2"
				src={isOpen ? ImgUp : ImgDown}
				alt="down"
				width={20}
				height={20}
			/>
		</div>
	));
}

function getIndex<T>(items: DropdownItem<T>[], value: T): number {
	const idx = items.findIndex((v) => v.value === value);
	return idx === -1 ? 0 : idx;
}

interface DropdownProps<T> {
	width: number;
	items: DropdownItem<T>[];
	idx: number;
	onChangeIdx: FnBase<number>;
	onClose: FnVoid;
}

function Dropdown<T>({width, items, onChangeIdx, idx, onClose}: Readonly<DropdownProps<T>>) {
	return (
		<div
			className="pt-2"
			style={{width}}>
			<div className={concat("border border-(--border) rounded bg-white p-1")}>
				{items.map((v, key) => (
					<button
						className={concat(
							"flex hover:bg-(--select) w-full p-1 rounded text-(--info) text-sm",
							idx === key ? "font-extrabold" : ""
						)}
						type="button"
						key={key}
						onClick={() => {
							onChangeIdx(key);
							onClose();
						}}>
						{v.label}
					</button>
				))}
			</div>
		</div>
	);
}
