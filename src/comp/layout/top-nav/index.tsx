"use server";
import React, {ReactNode} from "react";
import {cls} from "@src";
import {concat} from "nextjs-tools";
import Nav from "./nav";

interface Props {
	nav?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
}

export default async function ({nav, children, footer}: Readonly<Props>) {
	return (
		<>
			<Nav className={concat("sticky top-0 left-0 h-[70px] w-full", cls.zIndex.nav)}>{nav}</Nav>
			<main className={concat("min-h-[calc(100vh-70px)] mr-auto ml-auto", cls.width.max)}>
				<div className="h-5" />
				{children}
			</main>
			<footer className={concat("mr-auto ml-auto", cls.width.max)}>{footer}</footer>
		</>
	);
}
