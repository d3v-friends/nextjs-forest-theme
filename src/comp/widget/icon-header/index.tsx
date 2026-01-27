import React, {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";
import {Color, StringBoolean} from "../../../types";
import {concat} from "nextjs-tools";
import cls from "../../../fn/class-names";

interface Props {
	icon: StaticImageData;
	iconColor: Color;
	color: Color;
	className: string;
	children: ReactNode;
	label: ReactNode;
	right: ReactNode;
}

const ImgStyle: Record<StringBoolean, string> = {
	true: "w-10 h-10",
	false: "w-8 h-8",
};

export default function ({
	children,
	className = "mb-2",
	icon,
	color = "primary",
	iconColor = "primary",
	label,
	right,
}: Readonly<Partial<Props>>) {
	return (
		<div className={className}>
			<div className="flex items-center">
				{icon && (
					<Image
						className={concat(
							"aspect-square mr-2",
							cls.filter[iconColor],
							ImgStyle[label ? "true" : "false"]
						)}
						src={icon}
						alt="icon"
						width={30}
						height={30}
					/>
				)}
				<div className="grow">
					<h4 className={concat("leading-tight", cls.text[color])}>{children}</h4>
					<p className="text-(--info) leading-tight">{label}</p>
				</div>
				{!!right && <div className="pl-2">{right}</div>}
			</div>
		</div>
	);
}
