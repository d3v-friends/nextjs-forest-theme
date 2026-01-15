"use client";
import React from "react";
import {Button, Panel, PanelTitle, Table, useModal} from "@src";

export default function () {
	const [modal, setModal] = useModal();

	return modal(
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle>Table</PanelTitle>
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
								<Button
									onClick={(e) => {
										e.stopPropagation();
									}}
									onMiddleClick={(e) => {
										e.stopPropagation();
									}}>
									버튼
								</Button>
							),
						},
					]}
					list={list}
					onClick={(_, row) => alert(`left-click: id=${row.id}`)}
					onMiddleClick={(_, row) => alert(`middle-click: id=${row.id}`)}
				/>
			</Panel>
		</div>
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
