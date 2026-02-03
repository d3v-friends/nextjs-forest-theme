"use server";
import {HTML, NavElems, TopNav} from "@src";
import {NextLayoutProps} from "nextjs-tools";
import {ReactNode} from "react";

export default async function ({children}: NextLayoutProps) {
	return (
		<HTML>
			<TopNav
				nav={<Nav />}
				footer={<Footer />}>
				<div id="toast" />
				{children}
			</TopNav>
		</HTML>
	);
}
function Nav({}: Readonly<{children?: ReactNode}>) {
	const {Container, Logo, Left, Right, LinkButton, MobileMenu} = NavElems;
	return (
		<Container>
			<Left className="hidden lg:flex">
				<LinkButton
					href="/comp/button"
					className="mr-10">
					Component
				</LinkButton>
				<LinkButton href="/page/not-found">Page</LinkButton>
			</Left>
			<Logo>Forest Theme</Logo>

			<Right>
				<MobileMenu
					logo="Forest theme"
					items={[
						{label: "Component", href: "/comp/button"},
						{label: "Table", href: "/comp/table"},
						{label: "Widget", href: "/comp/widget"},
					]}
				/>
			</Right>
		</Container>
	);
}
function Footer({}: Readonly<{children?: ReactNode}>) {
	return <div className="h-80 bg-(--warning)"></div>;
}
