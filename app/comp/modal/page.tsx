"use client";
import React from "react";
import {alert, alertPromise, Color, IconHeader, okCancelPromise, SectionHeader, toast} from "@src";
import ImgToast from "web-asset/svg/regular/fi-rr-message-alert.svg";
import ImgAlert from "web-asset/svg/regular/fi-rr-message-alert.svg";
import {sleep} from "nextjs-tools";

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

	const onClickToast = (color: Color) => {
		toast(color, {
			color,
		});
	};

	const onClickAlertPromise = () => {
		alertPromise("Hello world", {header: "header", escape: true})
			.suspend(
				async () => {
					await sleep(2000);
					throw new Error("test");
				},
				{
					wait: 0,
				}
			)
			.alert(
				{
					test: "test",
					MODAL_ESCAPED: null,
				},
				{
					escape: true,
					header: "error",
				}
			);
	};

	const onClickOkCancelPromise = () => {
		okCancelPromise("ok cancel")
			.suspend(
				(value) => {
					if (!value) throw new Error("ModalCanceled");
					return sleep(2000);
				},
				{wait: 0}
			)
			.catch((e) => console.log(e));
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
				<div className="grid grid-cols-5 gap-2 lg:gap-4">
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

			<section>
				<IconHeader
					icon={ImgToast}
					iconColor="info"
					color="info"
					label="promise modal">
					Promise
				</IconHeader>

				<div className="grid grid-cols-5 gap-2 lg:gap-4">
					<button
						className="filled"
						onClick={onClickAlertPromise}>
						alert
					</button>

					<button
						className="filled"
						onClick={onClickOkCancelPromise}>
						okCancel
					</button>
				</div>
			</section>
		</div>
	);
}
