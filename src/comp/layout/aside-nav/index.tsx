import React, {ReactNode} from "react";
import {StaticImageData} from "next/image";
import {getAsideStatus} from "./config";
import Cont from "./cont";

interface Props {
	aside: AsideSector[];
	children: ReactNode;
	header?: ReactNode;
}

export interface AsideSector {
	title: ReactNode;
	links: AsideSectorLink[];
}

export interface AsideSectorLink {
	href: string;
	label: ReactNode;
	icon: StaticImageData;
}

export default async function (props: Readonly<Partial<Props>>) {
	const asideStatus = await getAsideStatus();

	return (
		<Cont
			{...props}
			initStatus={asideStatus}
		/>
	);
}
