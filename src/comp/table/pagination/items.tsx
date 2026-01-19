"use client";
import React, {ReactNode} from "react";
import {concat} from "nextjs-tools";
import {StyleBoolean, toStringBoolean} from "../../../types";
import Link from "next/link";
import Image from "next/image";
import ImgLeft from "web-asset/svg/regular/fi-rr-angle-small-left.svg";
import ImgRight from "web-asset/svg/regular/fi-rr-angle-small-right.svg";
import cls from "../../../fn/class-names";

interface ContProp {
	children?: ReactNode;
	disabled?: boolean;
	activated?: boolean;
}

function Cont({children, activated = false, disabled = false}: Readonly<ContProp>) {
	const disabledStyle: StyleBoolean = {
		true: "cursor-not-allowed",
		false: "",
	};

	const activatedStyle: StyleBoolean = {
		true: "bg-(--primary) text-white",
		false: "group-hover:border-(--primary) text-(--info)",
	};

	return (
		<div className={concat("group w-8 mr-1 ml-1 no-drag", cls.height.input)}>
			<div
				className={concat(
					"h-full flex items-center justify-center",
					"group border border-transparent rounded",
					disabledStyle[toStringBoolean(disabled)],
					activatedStyle[toStringBoolean(activated)]
				)}>
				{children}
			</div>
		</div>
	);
}

interface LinkButtonProp {
	children?: ReactNode;
	href?: string;
	activated?: boolean;
}

function LinkButton({href, children, activated}: Readonly<LinkButtonProp>) {
	if (!href) return <Cont disabled>{children}</Cont>;

	return (
		<Link href={href}>
			<Cont activated={activated}>{children}</Cont>
		</Link>
	);
}

interface PrevProp {
	activated: boolean;
	href?: string;
}

function Prev({activated, href}: Readonly<PrevProp>) {
	if (!activated) return null;

	return (
		<LinkButton href={href}>
			<Image
				className={concat("filter-(--info-filter) group-hover:filter-(--primary-filter)")}
				src={ImgLeft}
				alt="goto first"
				width={25}
				height={25}
			/>
		</LinkButton>
	);
}

interface NextProp {
	activated: boolean;
	href?: string;
}

function Next({href, activated}: Readonly<NextProp>) {
	if (!activated) return null;

	return (
		<LinkButton href={href}>
			<Image
				className={concat("filter-(--info-filter) group-hover:filter-(--primary-filter)")}
				src={ImgRight}
				alt="goto first"
				width={25}
				height={25}
			/>
		</LinkButton>
	);
}

export default {LinkButton, Prev, Next};
