import React, {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";

interface Props extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "className" | "children"> {
	icon?: StaticImageData;
	className?: string;
	children?: ReactNode;
	label?: ReactNode;
}

export default function ({children, className, icon, ...attr}: Readonly<Props>) {
	return (
		<div className="flex items-center">
			{icon && (
				<Image
					src={icon}
					alt="icon"
					width={20}
					height={20}
				/>
			)}
			<h3>{children}</h3>
		</div>
	);
}
