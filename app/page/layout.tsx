import {ReactNode} from "react";
import Image from "next/image";
import ImgForest from "../../asset/png/forest-theme.png";
import {AsideNav, AsideSector} from "@src";

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

const asideItems: AsideSector[] = [];
