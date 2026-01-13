"use client";
import React, {ReactNode} from "react";
import {cls, IsActive, ScrollTop} from "../../..";
import Link from "next/link";
import ImgCaret from "web-asset/svg/regular/fi-rr-caret-right.svg";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {concat} from "nextjs-tools";

interface Props {
	aside?: AsideSector[];
	children?: ReactNode;
}

export interface AsideSector {
	title: ReactNode;
	links: AsideSectorLink[];
}

export interface AsideSectorLink {
	href: string;
	label: ReactNode;
}

export default function ({children, aside = []}: Readonly<Props>) {
	return (
		<div className="flex">
			<div className="w-1/5">
				<ScrollTop>
					{({scrollTop}) => (
						<aside
							className={concat(cls.background.panel, cls.transition.short, "p-5 rounded-2xl")}
							style={{marginTop: `${scrollTop}px`}}>
							{aside.map((v, key) => (
								<Sector
									key={key}
									{...v}
								/>
							))}
						</aside>
					)}
				</ScrollTop>
			</div>

			<section className={concat("w-4/5 pl-8")}>{children}</section>
		</div>
	);
}

type Elems = "img" | "href";

const LinkStyle: Record<Elems, Record<IsActive, string>> = {
	img: {
		active: "filter-(--primary-filter)",
		inactive: "filter-(--info-filter)",
	},
	href: {
		active: "text-(--primary) brightness-70",
		inactive: "text-(--info)",
	},
};

function Sector({title, links}: Readonly<AsideSector>) {
	const path = usePathname();

	const isActive = (href: string): IsActive => {
		return path.startsWith(href) ? "active" : "inactive";
	};

	return (
		<div className="mb-3">
			<div className={concat(cls.text.title, "font-bold text-xl mb-4")}>{title}</div>
			{links.map((v, key) => (
				<div
					key={key}
					className={concat("pl-3 flex items-center mb-1")}>
					<Image
						className={concat("mr-1", LinkStyle.img[isActive(v.href)])}
						src={ImgCaret}
						alt="caret"
						width={15}
						height={15}
					/>

					<Link
						className={concat(LinkStyle.href[isActive(v.href)])}
						href={v.href}>
						{v.label}
					</Link>
				</div>
			))}
		</div>
	);
}
