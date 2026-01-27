import {ReactNode} from "react";
import {Tab} from "@src";
import Img01 from "web-asset/svg/regular/fi-rr-circle-1.svg";
interface Props {
	children?: ReactNode;
}

export default async function ({children}: Readonly<Props>) {
	return (
		<Tab
			items={[
				{label: "01", href: "/comp/tab/01", icon: Img01},
				{label: "02", href: "/comp/tab/02"},
				{label: "03", href: "/comp/tab/03"},
			]}>
			{children}
		</Tab>
	);
}
