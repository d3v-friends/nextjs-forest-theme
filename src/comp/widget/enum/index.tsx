import React, {ReactNode} from "react";
import {Color} from "../../../types";
import {concat} from "nextjs-tools";
import cls from "../../../fn/class-names";

interface Props<T> {
	value: T;
	items: EnumItem<T>[];
}

export interface EnumItem<T> {
	label: ReactNode;
	value: T;
	color: Color;
}

// todo 추후 필요시 색 바꾸는 기능 추가하기
export default function <T>({value, items}: Readonly<Props<T>>) {
	const idx = items.findIndex((v) => v.value === value);
	const item = items[idx === -1 ? 0 : idx];

	return (
		<div className="flex inline-flex items-center">
			<div className={concat("h-3 w-3 rounded-full mr-1", cls.background[item.color])}></div>
			<div className="text-(--info)">{item.label}</div>
		</div>
	);
}
