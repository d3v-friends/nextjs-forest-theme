"use client";
import React from "react";
import {concat} from "nextjs-tools";
import cls from "@src/fn/class-names";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value" | "type"> {
	value: boolean;
	onChange: (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => void;
}

export default function ({value, children, onChange, ...attr}: Readonly<Props>) {
	return (
		<button
			{...attr}
			type="button"
			className={concat(cls.height.input, "flex items-center no-drag")}
			onClick={(e) => onChange(e, !value)}>
			<div
				className={concat(
					"border-(--border) border w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center overflow-hidden",

					value ? "border-(--primary) bg-(--primary)" : ""
				)}>
				<Image
					className={concat("w-[0.7rem]", value ? "" : "hidden")}
					src={ImgCheck}
					alt="check"
					width={18}
					height={18}
				/>
			</div>
			<div className={concat("pl-2 text-sm", value ? "" : " text-(--info)")}>{children}</div>
		</button>
	);
}
