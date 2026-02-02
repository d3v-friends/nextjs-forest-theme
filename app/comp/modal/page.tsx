"use client";
import React from "react";
import {alert, Color, IconHeader, okCancel, SectionHeader, toast} from "@src";
import ImgToast from "web-asset/svg/regular/fi-rr-message-alert.svg";
import ImgAlert from "web-asset/svg/regular/fi-rr-message-alert.svg";
import ImgOkCancel from "web-asset/svg/regular/fi-rr-selection.svg";

const colors: Color[] = ["primary", "danger", "success", "warning", "info"];
export default function () {
	const onClick = () => {
		alert("that's good");
	};

	const onClickHeader = () => {
		alert("that's good", {
			header: "hello",
		});
	};

	const onClickOkCancel = () => {
		okCancel(<p>Choose one?</p>, {
			header: "Ok Cancel",
			onClickOk: () => console.log("ok"),
			onClickCancel: () => console.log("cancel"),
		});
	};

	const onClickToast = (color: Color) => {
		toast(color, {
			color,
		});
	};

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<SectionHeader
				color="info"
				right="abcd">
				Modal (모달)
			</SectionHeader>
			<section>
				<IconHeader
					color="danger"
					icon={ImgAlert}
					iconColor="danger"
					label="alert function">
					Alert
				</IconHeader>
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
				<IconHeader
					icon={ImgOkCancel}
					label="select your choice">
					Ok cancel
				</IconHeader>
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

				<div className="grid grid-cols-5 gap-2 lg:gap-4">
					{colors.map((color, key) => (
						<button
							key={key}
							className="outlined"
							onClick={() => onClickToast(color)}>
							{color}
						</button>
					))}
				</div>
			</section>
		</div>
	);
}
