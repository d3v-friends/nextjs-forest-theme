"use client";
import React, {useEffect} from "react";
import {forestAlert} from "@src";

export default function () {
	useEffect(() => {
		forestAlert(
			<>
				<h4>forestAlert</h4>
				<p>that's good</p>
			</>,
			{
				header: "Alert",
			}
		);
	}, []);
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Alert</h3>
				<button
					className="filled"
					onClick={() => forestAlert("hello")}>
					alert
				</button>
			</section>
		</div>
	);
}
