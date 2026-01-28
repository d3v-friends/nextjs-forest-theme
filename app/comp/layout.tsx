"use server";
import {ReactNode} from "react";
import {AsideNav, NavElems, TopNav} from "@src";
import {AsideSector} from "@src/comp/layout/aside-nav";
import ImgLogo from "web-asset/svg/regular/fi-rr-selection.svg";
import ImgForest from "../../asset/png/forest-theme.png";
import Image from "next/image";

interface Props {
	children?: ReactNode;
}

export default async function ({children}: Readonly<Props>) {
	return (
		<TopNav
			nav={<Nav />}
			footer={<Footer />}>
			<div id="toast" />
			<AsideNav
				aside={asideItems}
				header={
					<div className="flex items-center">
						<Image
							className="mr-2"
							src={ImgForest}
							alt="forest"
							width={25}
							height={25}
						/>
						Forest
					</div>
				}>
				{children}
			</AsideNav>
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
				icon: ImgLogo,
			},
			{
				href: "/comp/button",
				label: "button",
				icon: ImgLogo,
			},
			{
				href: "/comp/widget",
				label: "widget",
				icon: ImgLogo,
			},
			{
				href: "/comp/table",
				label: "table",
				icon: ImgLogo,
			},
			{
				href: "/comp/input",
				label: "input",
				icon: ImgLogo,
			},
			{
				href: "/comp/server-action",
				label: "server action",
				icon: ImgLogo,
			},
			{
				href: "/comp/tabs",
				label: "tab",
				icon: ImgLogo,
			},
		],
	},
];
