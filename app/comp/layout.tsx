"use server";
import {ReactNode} from "react";
import {AsideNav, TopNav} from "@src";

interface Props {
	children?: ReactNode;
}

export default async function ({children}: Readonly<Props>) {
	return (
		<TopNav footer={<Footer />}>
			<AsideNav
				aside={[
					{
						title: "Component",
						links: [
							{
								href: "/comp/button",
								label: "버튼",
							},
							{
								href: "/comp/modal",
								label: "모달",
							},
						],
					},
				]}>
				{children}
			</AsideNav>
		</TopNav>
	);
}

function Footer({}: Readonly<{children?: ReactNode}>) {
	return <div className="h-30"></div>;
}
