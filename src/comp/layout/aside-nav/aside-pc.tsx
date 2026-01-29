"use client";
import React, {ReactNode} from "react";
import {AsideSector, cls, IsActive, ScrollTop, StringBoolean, toStringBoolean} from "../../..";
import {concat, FnBase} from "nextjs-tools";
import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImgCaret from "web-asset/svg/regular/fi-rr-arrow-alt-circle-right.svg";

interface Props {
	aside: AsideSector[];
	isOpen: boolean;
	onChangeIsOpen: FnBase<boolean>;
	header?: ReactNode;
}

export default function ({aside, isOpen, onChangeIsOpen, header}: Readonly<Props>) {
	return (
		<ScrollTop>
			{({scrollTop}) => (
				<aside
					className={concat(cls.background.panel, cls.transition.short, "p-5 rounded-2xl")}
					style={{marginTop: `${scrollTop}px`}}>
					<Header
						isOpen={isOpen}
						onChangeIsOpen={onChangeIsOpen}>
						{header}
					</Header>

					{aside.map((v, key) => (
						<Sector
							isOpen={isOpen}
							key={key}
							{...v}
						/>
					))}
				</aside>
			)}
		</ScrollTop>
	);
}

type Elems = "img" | "href" | "cont" | "header";

const LinkStyle: Record<Elems, Record<IsActive, string>> = {
	header: {
		active: "border-transparent",
		inactive: "border-(--border)",
	},
	img: {
		active: "filter-(--info-filter)",
		inactive: "filter-(--info-filter) opacity-40 group-hover:opacity-80",
	},
	href: {
		active: "text-(--primary) font-bold brightness-50",
		inactive: "text-(--info)",
	},
	cont: {
		active: "bg-(--aside-select)",
		inactive: "bg-none group-hover:bg-(--aside-select)/40",
	},
};

function Sector({title, links, isOpen}: Readonly<AsideSector & {isOpen: boolean}>) {
	const path = usePathname();

	const isActive = (href: string): IsActive => {
		return path.startsWith(href) ? "active" : "inactive";
	};

	const isBool = (v: boolean) => (v ? "active" : "inactive");

	return (
		<div className="mb-3">
			<div
				className={concat(
					cls.text.title,
					cls.transition.shortAll,
					LinkStyle.header[isBool(isOpen)],
					"font-extrabold text-sm mb-2 border-b h-5"
				)}>
				{isOpen && title}
			</div>
			{links.map((v, key) => (
				<div
					key={key}
					className="group">
					<Link
						href={v.href}
						className={concat(
							"pl-4 pr-5 flex items-center mb-2 h-12",
							"rounded-xl group",
							"whitespace-nowrap",
							LinkStyle.cont[isActive(v.href)]
						)}>
						<Image
							className={concat(LinkStyle.img[isActive(v.href)])}
							src={v.icon}
							alt={v.href}
							width={20}
							height={20}
						/>

						{isOpen && (
							<div className={concat("overflow-hidden pl-2", LinkStyle.href[isActive(v.href)])}>
								{v.label}
							</div>
						)}
					</Link>
				</div>
			))}
		</div>
	);
}

/* ---------------------------------------------------------------------------------------------------- */

interface HeaderProps {
	children?: ReactNode;
	isOpen: boolean;
	onChangeIsOpen: FnBase<boolean>;
}

const HeaderStyle: Record<"cont" | "img", Record<StringBoolean, string>> = {
	cont: {
		true: "justify-between",
		false: "justify-center",
	},
	img: {
		true: "rotate-180",
		false: "rotate-0",
	},
};

function Header({isOpen, onChangeIsOpen, children}: Readonly<HeaderProps>) {
	return (
		<div className={concat("flex items-center h-9 mb-1", HeaderStyle.cont[toStringBoolean(isOpen)])}>
			{isOpen && <h3 className="text-(--info)">{children}</h3>}
			<button
				className="group"
				onClick={() => onChangeIsOpen(!isOpen)}>
				<Image
					className={concat(
						"filter-(--info-filter) group-hover:opacity-100 opacity-40",
						cls.transition.short,
						HeaderStyle.img[toStringBoolean(isOpen)]
					)}
					src={ImgCaret}
					alt="opener"
					width={30}
					height={30}
				/>
			</button>
		</div>
	);
}
