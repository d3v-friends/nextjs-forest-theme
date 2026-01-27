"use client";
import React, {ReactNode} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {concat} from "nextjs-tools";
import {StringBoolean} from "../../../types";
import Image, {StaticImageData} from "next/image";
import cls from "../../../fn/class-names";

interface Props {
	items?: TabItem[];
	children?: ReactNode;
	className?: string;
}

export interface TabItem {
	label: ReactNode;
	href: string;
	icon?: StaticImageData;
}

const TabStyle: Record<StringBoolean, string> = {
	true: "bg-(--select) font-bold",
	false: "text-(--info)",
};

const IconStyle: Record<StringBoolean, string> = {
	true: "",
	false: cls.filter.info,
};

export default function ({items = [], children, className}: Readonly<Props>) {
	const pathname = usePathname();
	const idx = items.findIndex((v) => pathname.startsWith(v.href));
	const isActivated = (key: number): StringBoolean => (idx === key ? "true" : "false");

	return (
		<div className={className}>
			<div className="flex items-baseline">
				{items.map((v, key) => (
					<Link
						className={concat(
							"block pt-2 pb-2 pl-4 pr-4 h-12 overflow-hidden",
							"border-t border-r border-(--border)",
							"rounded-tl-lg rounded-tr-lg",
							"flex items-center",
							"text-sm",
							TabStyle[isActivated(key)],
							key === 0 ? "border-l" : ""
						)}
						href={v.href}
						key={key}>
						{v.icon && (
							<Image
								className={concat("mr-1 w-3", IconStyle[isActivated(key)])}
								src={v.icon}
								alt={v.href}
								width={15}
								height={15}
							/>
						)}
						{v.label}
					</Link>
				))}
			</div>

			<section>{children}</section>
		</div>
	);
}
