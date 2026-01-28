"use client";
import React, {ReactNode, useEffect, useState} from "react";
import cls from "../../../fn/class-names";
import {StringBoolean, toStringBoolean} from "../../../types";
import {AsideSector} from ".";
import {setAsideStatus} from "./config";
import {concat} from "nextjs-tools";
import AsidePC from "./aside-pc";
import AsideMobile from "./aside-mobile";

interface Props {
	aside: AsideSector[];
	children: ReactNode;
	header: ReactNode;
}

const AsideStyle: Record<StringBoolean, string> = {
	true: "w-1/5",
	false: "w-[96px]",
};

const ContentStyle: Record<StringBoolean, string> = {
	true: "w-full lg:w-4/5",
	false: "w-full lg:w-[calc(100%-96px)]",
};

const AsideMobileStyle: Record<StringBoolean, string> = {
	true: "block",
	false: "hidden",
};

export default function ({
	aside = [],
	children,
	initStatus,
	header,
}: Readonly<Partial<Props> & {initStatus: StringBoolean}>) {
	const [isOpen, setIsOpen] = useState(initStatus === "true");

	useEffect(() => {
		setAsideStatus(toStringBoolean(isOpen)).catch((e) => console.error(e));
	}, [isOpen]);

	return (
		<div className={concat("flex", cls.transition.shortAll)}>
			<div className={concat(AsideStyle[toStringBoolean(isOpen)], "hidden lg:block overflow-hidden")}>
				<AsidePC
					isOpen={isOpen}
					onChangeIsOpen={setIsOpen}
					aside={aside}
					header={header}
				/>
			</div>
			<div className="lg:hidden">
				<AsideMobile aside={aside} />
			</div>
			<div className={concat("lg:pl-8", ContentStyle[toStringBoolean(isOpen)])}>{children}</div>
		</div>
	);
}
