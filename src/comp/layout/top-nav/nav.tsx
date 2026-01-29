"use client";
import React, {ReactNode} from "react";
import {concat} from "nextjs-tools";
import {cls, IsActive, ScrollTop} from "../../..";

interface Props {
	children?: ReactNode;
	className?: string;
}

const Styles: Record<IsActive, string> = {
	active: "bg-white",
	inactive: "bg-(--nav) backdrop-blur-xs shadow-xl shadow-[rgba(0,0,0,0.08)]",
};

export default function ({children, className = ""}: Readonly<Props>) {
	const isTop = (scrollTop: number): IsActive => (scrollTop < 100 ? "active" : "inactive");
	return (
		<ScrollTop>
			{({scrollTop}) => (
				<nav className={concat(className, cls.transition.default, Styles[isTop(scrollTop)])}>{children}</nav>
			)}
		</ScrollTop>
	);
}
