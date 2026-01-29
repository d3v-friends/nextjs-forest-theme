"use client";
import React from "react";
import {Pagination, Table} from "@src";

interface Props {
	page: number;
	size: number;
}

export default function ({page, size}: Readonly<Props>) {
	return (
		<>
			<Table
				columns={[
					{
						label: "아이디",
						key: "id",
						classNames: {
							thead: "w-1/4 text-center",
						},
						row: (v) => v.id,
					},
					{
						label: "이름",
						key: "name",
						classNames: {
							thead: "w-1/4 text-center",
						},
						row: (v) => v.name,
					},
					{
						label: "나이",
						key: "age",
						classNames: {
							thead: "w-1/4 text-center",
						},
						row: (v) => v.age,
					},
					{
						label: "기능",
						classNames: {
							thead: "w-1/4 text-center",
						},
						row: (v) => (
							<button
								className="filled w-full"
								onMouseUp={(e) => e.stopPropagation()}>
								버튼
							</button>
						),
					},
				]}
				list={list}
				onClick={(_, row) => alert(`left-click: id=${row.id}`)}
				onMiddleClick={(_, row) => alert(`middle-click: id=${row.id}`)}
			/>

			<Pagination
				page={page}
				size={size}
				total={1001}
			/>
		</>
	);
}

type Item = {
	id: string;
	name: string;
	age: number;
};

const list: Item[] = [
	{
		id: "1",
		name: "apple",
		age: 1,
	},
	{
		id: "2",
		name: "banana",
		age: 2,
	},
	{
		id: "3",
		name: "cherry",
		age: 3,
	},
];
