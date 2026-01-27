"use client";
import React from "react";
import {alert, IconHeader, okCancel} from "@src";
import ImgToast from "web-asset/svg/regular/fi-rr-message-alert.svg";

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
				<IconHeader
					icon={ImgToast}
					iconColor="success"
					color="success"
					label="toast popup">
					Toast
				</IconHeader>
				<button className="outlined">Toast</button>
			</section>
		</div>
	);
}
