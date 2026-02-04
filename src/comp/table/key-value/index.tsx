import React, {ReactNode} from "react";
import {concat} from "nextjs-tools";

interface Props {
	items: KeyValueItem[];
}

export interface KeyValueItem {
	label: ReactNode;
	value: ReactNode;
	prefix?: ReactNode;
	suffix?: ReactNode;
}

export default function ({items = []}: Readonly<Partial<Props>>) {
	return items.map((item, key) => (
		<div
			className={concat("flex items-center rounded-xl p-4", key % 2 === 0 ? "bg-(--table-stripe)" : "")}
			key={key}>
			<div className="grow font-bold text-(--info)">{item.label}</div>
			{item.prefix && <div className="mr-1 text-(--primary) brightness-70">{item.prefix}</div>}
			<div>{item.value}</div>
			{item.suffix && <div className="ml-1 text-(--primary) brightness-70">{item.suffix}</div>}
		</div>
	));
}
