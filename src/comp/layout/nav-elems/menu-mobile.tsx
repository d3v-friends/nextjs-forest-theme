"use client";
import React, {ReactNode, useState} from "react";
import ImgMenu from "web-asset/svg/regular/fi-rr-menu-burger.svg";
import Image from "next/image";
import {concat, FnBase, FnVoid} from "nextjs-tools";
import {createPortal} from "react-dom";
import {IsActive, ScrollLock} from "../../..";
import ImgClose from "web-asset/svg/regular/fi-rr-arrow-circle-left.svg";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props extends Omit<React.HTMLAttributes<HTMLButtonElement>, "children" | "onClick"> {
	logo: ReactNode;
	items: TopNavItem[];
}

type LabelFC = (onClose: FnVoid) => ReactNode;

export interface TopNavItem {
	label: ReactNode | LabelFC;
	href?: string;
}

export default function ({className = "", items = [], logo = null, ...opts}: Readonly<Partial<Props>>) {
	const [open, onChangeOpen] = useState(false);

	return (
		<>
			<button
				{...opts}
				className={concat("lg:hidden group", className)}
				onClick={() => onChangeOpen(!open)}>
				<Image
					className={concat("filter-(--info-filter) opacity-70 group-hover:opacity-100")}
					src={ImgMenu}
					alt="menu"
					width={25}
					height={25}
				/>
			</button>

			<Aside
				open={open}
				onChangeOpen={onChangeOpen}
				items={items}
				logo={logo}
			/>
		</>
	);
}

interface AsideProps {
	open: boolean;
	onChangeOpen: FnBase<boolean>;
	items: TopNavItem[];
	logo: ReactNode;
}

function Aside({open, onChangeOpen, logo, items}: Readonly<AsideProps>) {
	if (!open) return null;

	return (
		<ScrollLock>
			{createPortal(
				<aside
					className={concat(
						"fixed top-0 left-0 w-full h-full z-(--z-floating)",
						"bg-(--suspend) backdrop-blur"
					)}
					onMouseUp={() => onChangeOpen(false)}>
					<div
						className={concat("w-4/5 h-full top-0 left-0 p-5", "bg-(--nav)")}
						onMouseUp={(e) => e.stopPropagation()}>
						<div className="flex items-center mb-4">
							<h4 className="grow">{logo}</h4>
							<button
								className="group"
								onClick={() => onChangeOpen(false)}>
								<Image
									className="filter-(--info-filter) opacity-70 group-hover:opacity-100"
									src={ImgClose}
									alt="close"
									width={25}
									height={25}
								/>
							</button>
						</div>

						{items.map((item, key) => (
							<Item
								{...item}
								key={key}
								onChangeOpen={onChangeOpen}
							/>
						))}
					</div>
				</aside>,
				document.body
			)}
		</ScrollLock>
	);
}

const ItemStyle: Record<IsActive, string> = {
	active: "font-extrabold underline text-(--primary) brightness-70",
	inactive: "text-(--info)",
};

function Item({href, label, onChangeOpen}: Readonly<TopNavItem & {onChangeOpen: FnBase<boolean>}>) {
	const pathname = usePathname();
	const height = "h-10";
	const target = typeof label === "function" ? label(() => onChangeOpen(false)) : label;
	if (!href) return <div className={concat("flex items-center", height)}>{target}</div>;

	const isActivated = pathname.startsWith(href) ? "active" : "inactive";

	return (
		<Link
			className={concat("flex items-center", height, ItemStyle[isActivated])}
			href={href}
			onMouseUp={() => onChangeOpen(false)}>
			{target}
		</Link>
	);
}
