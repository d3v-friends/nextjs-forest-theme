"use client";
import React, {ReactNode} from "react";
import Center from "../../wrap/center";
import Image from "next/image";
import Img404 from "web-asset/svg/regular/fi-rr-octagon-xmark.svg";
import {useRouterTools} from "nextjs-tools";

interface Props {
	children: ReactNode;
	error: Error;
	buttonText: ReactNode;
}

export default function ({children, error, buttonText = "go to back"}: Readonly<Partial<Props>>) {
	const router = useRouterTools();

	return (
		<Center>
			<div className="flex flex-col items-center justify-center">
				<div className="flex items-center mb-4">
					<Image
						className="filter-(--danger-filter) mr-5"
						src={Img404}
						alt="404"
						width={50}
						height={50}
					/>
					<div className="text-3xl raleway text-(--info)">Error</div>
				</div>
				{error && <p>{error.message}</p>}
				<p className="text-(--info) mb-8">{children}</p>

				<button
					className="outlined primary"
					onClick={() => router.back()}>
					{buttonText}
				</button>
			</div>
		</Center>
	);
}
