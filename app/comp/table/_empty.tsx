"use client";
import React from "react";
import {Table} from "@src";

interface Props {}

export default function ({}: Readonly<Props>) {
	return (
		<Table
			columns={[
				{
					label: "아이디",
					key: "id",
					classNames: {
						thead: "w-1/4 text-center",
					},
					row: (v) => "",
				},
				{
					label: "이름",
					key: "name",
					classNames: {
						thead: "w-1/4 text-center",
					},
					row: (v) => "",
				},
				{
					label: "나이",
					key: "age",
					classNames: {
						thead: "w-1/4 text-center",
					},
					row: (v) => "",
				},
				{
					label: "기능",
					classNames: {
						thead: "w-1/4 text-center",
					},
					row: (v) => "",
				},
			]}
		/>
	);
}
