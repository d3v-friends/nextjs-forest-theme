"use client";
import React from "react";
import {alert, okCancel} from "@src";

export default function () {
	const onClick = () => {
		alert(
			<>
				<h4>forestAlert</h4>
				<p>that's good</p>
			</>
		);
	};

	const onClickHeader = () => {
		alert(
			<>
				<p>that's good</p>
			</>,
			{
				header: "hello",
			}
		);
	};

	const onClickOkCancel = () => {
		okCancel(<p>Choose one?</p>, {
			header: "Ok Cancel",
			onClickOk: () => console.log("ok"),
			onClickCancel: () => console.log("cancel"),
		});
	};

	const onClickDropdown = () => {};
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

			<section>
				<h3>Dropdown</h3>
				<button className="outlined">Dropdown</button>
			</section>
		</div>
	);
}
