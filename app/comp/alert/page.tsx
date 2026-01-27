"use client";
import React from "react";
import {forestAlert, forestOkCancel} from "@src";

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

	const onClickOkCancel = () => {
		forestOkCancel(<p>Choose one?</p>, {
			header: "Ok Cancel",
			onClickOk: () => console.log("ok"),
			onClickCancel: () => console.log("cancel"),
		});
	};
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Alert</h3>
				<div className="grid grid-cols-4 gap-2 lg:gap-4">
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
				</div>
			</section>

			<section>
				<h3>Ok cancel</h3>
				<div className="grid grid-cols-4 gap-2 lg:gap-4">
					<button
						className="filled"
						onClick={onClickOkCancel}>
						Open
					</button>
				</div>
			</section>
		</div>
	);
}
