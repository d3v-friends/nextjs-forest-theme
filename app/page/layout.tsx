import {ReactNode} from "react";
import Image from "next/image";
import ImgForest from "../../asset/png/forest-theme.png";
import {AsideNav, AsideSector} from "@src";
import ImgNotFound from "web-asset/svg/regular/fi-rr-error-404.svg";
import ImgError from "web-asset/svg/regular/fi-rr-triangle-warning.svg";

interface Props {
	children: ReactNode;
}

export default async function ({children}: Readonly<Partial<Props>>) {
	return (
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
					Page
				</div>
			}>
			{children}
		</AsideNav>
	);
}

const asideItems: AsideSector[] = [
	{
		title: "pages",
		links: [
			{label: "not-found", href: "/page/not-found", icon: ImgNotFound},
			{label: "error", href: "/page/error", icon: ImgError},
		],
	},
];
