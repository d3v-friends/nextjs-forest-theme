"use client";
import React, {ReactNode} from "react";
import Center from "../../wrap/center";
import Img404 from "web-asset/svg/regular/fi-rr-triangle-warning.svg";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface Props {
	children?: ReactNode;
	buttonText?: ReactNode;
	href?: string;
}

export default function ({children = "page doesn't exist", buttonText = "go to home", href = "/"}: Readonly<Props>) {
	const pathname = usePathname();
	return (
		<Center>
			<div className="flex flex-col items-center justify-center">
				<div className="flex items-center mb-4">
					<Image
						className="filter-(--primary-filter) mr-5"
						src={Img404}
						alt="404"
						width={50}
						height={50}
					/>
					<div className="text-3xl raleway text-(--info)">404 Not Found</div>
				</div>
				<p>{pathname}</p>
				<p className="text-(--info) mb-8">{children}</p>

				<Link
					href={href}
					className="border border-(--primary) rounded pt-2 pb-2 pr-4 pl-4 text-(--primary) brightness-70 hover:underline">
					{buttonText}
				</Link>
			</div>
		</Center>
	);
}
