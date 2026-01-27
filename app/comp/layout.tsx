"use server";
import {ReactNode} from "react";
import {AsideNav, NavElems, TopNav} from "@src";
import {AsideSector} from "@src/comp/layout/aside-nav";

interface Props {
	children?: ReactNode;
}

export default async function ({children}: Readonly<Props>) {
	return (
		<TopNav
			nav={<Nav />}
			footer={<Footer />}>
			<div id="toast" />
			<AsideNav aside={asideItems}>{children}</AsideNav>
		</TopNav>
	);
}

function Footer({}: Readonly<{children?: ReactNode}>) {
	return <div className="h-80 bg-(--warning)"></div>;
}

function Nav({}: Readonly<{children?: ReactNode}>) {
	const {Container, Logo, Left, Right, LinkButton} = NavElems;
	return (
		<Container>
			<Left>
				<LinkButton
					href="/comp/button"
					className="mr-10">
					Component
				</LinkButton>
				<LinkButton href="/comp/button">Component</LinkButton>
			</Left>
			<Logo>Forest Theme</Logo>
			<Right></Right>
		</Container>
	);
}

const asideItems: AsideSector[] = [
	{
		title: "Component",
		links: [
			{
				href: "/comp/modal",
				label: "modal",
			},
			{
				href: "/comp/button",
				label: "button",
			},
			{
				href: "/comp/widget",
				label: "widget",
			},
			{
				href: "/comp/table",
				label: "table",
			},
			{
				href: "/comp/input",
				label: "input",
			},
			{
				href: "/comp/server-action",
				label: "server action",
			},
			{
				href: "/comp/tab",
				label: "tab",
			},
		],
	},
];
