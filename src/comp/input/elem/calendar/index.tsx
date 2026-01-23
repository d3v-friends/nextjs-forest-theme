"use client";
import React from "react";
import Calendar from "react-calendar";
import {FnBase, Nullable} from "nextjs-tools";
import Image, {StaticImageData} from "next/image";
import ImgPrev from "web-asset/svg/regular/fi-rr-angle-small-left.svg";
import ImgPrev2 from "web-asset/svg/regular/fi-rr-angle-double-small-left.svg";
import ImgNext from "web-asset/svg/regular/fi-rr-angle-small-right.svg";
import ImgNext2 from "web-asset/svg/regular/fi-rr-angle-double-small-right.svg";
import {DateTime} from "luxon";

interface Props {
	value: Nullable<Date>;
	onChange: FnBase<Nullable<Date>>;
	locale?: string;
	timezone?: string;
	className?: string;
}

// todo 스타일은 계속 수정해서 원하는 디자인까지 만들기
// 시간은 timezone 기준으로 00:00 으로 자동 변경하기
export default function ({value, onChange, locale = "ko-kr", timezone = "Asia/Seoul", className}: Readonly<Props>) {
	return (
		<div className={className}>
			<Calendar
				className="forest"
				locale={locale}
				value={value}
				prevLabel={<Button alt="prev">{ImgPrev}</Button>}
				prev2Label={<Button alt="prev2">{ImgPrev2}</Button>}
				nextLabel={<Button alt="next">{ImgNext}</Button>}
				next2Label={<Button alt="next2">{ImgNext2}</Button>}
				onChange={(value, e) => {
					let date = value instanceof Date ? value : null;
					if (date) {
						date = DateTime.fromJSDate(date)
							.toUTC()
							.setZone(timezone)
							.set({hour: 0, minute: 0, second: 0, millisecond: 0})
							.toJSDate();
					}
					onChange(date);
				}}
			/>
		</div>
	);
}

interface ButtonProps {
	children: StaticImageData;
	alt: string;
}

function Button({children, alt}: Readonly<ButtonProps>) {
	return (
		<div className="flex items-center justify-center group">
			<Image
				className="filter-(--primary-info)"
				src={children}
				alt={alt}
				width={20}
				height={20}
			/>
		</div>
	);
}
