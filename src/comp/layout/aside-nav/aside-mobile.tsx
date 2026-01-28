"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {concat, FnBase} from "nextjs-tools";
import ImgPlus from "web-asset/svg/regular/fi-rr-plus.svg";
import Image from "next/image";
import {AsideSector, AsideSectorLink, DelayUnmount, IsActive, ScrollLock} from "../../..";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
	aside: AsideSector[];
	header: ReactNode;
}

export default function ({aside = [], header = ""}: Readonly<Partial<Props>>) {
	const [init, onChangeInit] = useState(false);
	const [open, onChangeOpen] = useState(false);

	useEffect(() => {
		onChangeInit(true);
	}, []);

	return (
		init && (
			<>
				<Aside {...{open, onChangeOpen, aside}} />

				{createPortal(
					<div
						className={concat(
							"lg:hidden fixed right-5 bottom-5 z-(--z-floating)",
							"group h-15 w-15 rounded-full overflow-hidden shadow-xl"
						)}>
						<button
							className={concat(
								"w-full h-full",
								"flex items-center justify-center",
								"bg-(--primary)/70  group-active:bg-(--primary)"
							)}
							onClick={() => onChangeOpen(!open)}>
							<Image
								className={concat("filter-(--info-filter) group-hover:opacity-100 opacity-50")}
								src={ImgPlus}
								alt="opener"
								width={25}
								height={25}
							/>
						</button>
					</div>,
					document.body
				)}
			</>
		)
	);
}

interface AsideProps {
	children?: ReactNode;
	open: boolean;
	onChangeOpen: FnBase<boolean>;
	aside: AsideSector[];
}

function Aside({open, onChangeOpen, aside}: Readonly<AsideProps>) {
	return (
		<DelayUnmount show={open}>
			<>
				{createPortal(
					<ScrollLock>
						{
							<div
								className={concat(
									"fixed top-0 w-full h-full z-(--z-floating)",
									"backdrop-blur-xl animated bg-(--suspend)"
								)}
								onMouseUp={() => onChangeOpen(false)}>
								<div
									className={concat("absolute h-full w-4/5 bg-(--nav) p-5")}
									onMouseUp={(e) => e.stopPropagation()}>
									{aside.map((sector, key) => (
										<Sector
											{...sector}
											onChangeOpen={onChangeOpen}
											key={key}
										/>
									))}
								</div>
							</div>
						}
					</ScrollLock>,
					document.body
				)}
			</>
		</DelayUnmount>
	);
}

function Sector({title, links, onChangeOpen}: Readonly<AsideSector & {onChangeOpen: FnBase<boolean>}>) {
	return (
		<>
			<h6 className="text-(--info) text-sm mb-2">{title}</h6>
			{links.map((link, key2) => (
				<LinkButton
					{...link}
					onChangeOpen={onChangeOpen}
					key={key2}
				/>
			))}
		</>
	);
}

const LinkStyle: Record<"link" | "img", Record<IsActive, string>> = {
	link: {
		active: "bg-(--aside-select) font-extrabold",
		inactive: "text-(--info)",
	},
	img: {
		active: "opacity-100",
		inactive: "opacity-20",
	},
};

function LinkButton({icon, label, href, onChangeOpen}: Readonly<AsideSectorLink & {onChangeOpen: FnBase<boolean>}>) {
	const pathname = usePathname();
	const isActivated: IsActive = pathname.startsWith(href) ? "active" : "inactive";

	return (
		<Link
			className={concat("flex pl-4 h-13 flex items-center mb-2 rounded-xl", LinkStyle.link[isActivated])}
			href={href}
			onMouseDown={(e) => {
				e.stopPropagation();
				onChangeOpen(false);
			}}>
			{icon && (
				<Image
					className={concat("mr-2 filter-(--info-filter)", LinkStyle.img[isActivated])}
					src={icon}
					alt={href}
					width={20}
					height={20}
				/>
			)}

			{label}
		</Link>
	);
}
