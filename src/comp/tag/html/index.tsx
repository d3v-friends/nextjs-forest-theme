"use server";
import React, {ReactNode} from "react";
import localFont from "next/font/local";
import "../../../../asset/style/index.scss";
import Promise from "../../../fn/promise-chaining/promise-implement";

interface Props {
	children?: ReactNode;
	lang?: string;
}

export default async function ({children, lang = "ko"}: Readonly<Props>) {
	return (
		<html lang={lang}>
			<body className="font-[14px] lg:font-[16px] ">
				{children}
				<Promise />
			</body>
		</html>
	);
}

const astasans = localFont({
	display: "swap",
	preload: true,
	src: [
		{
			path: "../../../../asset/font/astasans/100.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../../../asset/font/astasans/400.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../../asset/font/astasans/500.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../../asset/font/astasans/600.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../../../asset/font/astasans/700.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../../asset/font/astasans/800.ttf",
			weight: "800",
			style: "normal",
		},
	],
});

const raleway = localFont({
	display: "swap",
	preload: true,
	src: [
		{
			path: "../../../../asset/font/raleway/100.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/200.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/300.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/400.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/500.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/600.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/700.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../../asset/font/raleway/800.ttf",
			weight: "800",
			style: "normal",
		},
	],
});
