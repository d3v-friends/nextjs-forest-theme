"use client";
import React from "react";
import {forestAlert} from "@src";

export default function () {
	const onClick = () => {
		forestAlert(
			<>
				<h4>forestAlert</h4>
				<p>that's good</p>
			</>
		);
	};

	const onClickHeader = () => {
		forestAlert(
			<>
				<p>that's good</p>
			</>,
			{
				header: "hello",
			}
		);
	};
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Alert</h3>
				<button
					className="filled"
					onClick={onClick}>
					alert
				</button>

				<button
					className="filled"
					onClick={onClickHeader}>
					header
				</button>
			</section>
		</div>
	);
}
