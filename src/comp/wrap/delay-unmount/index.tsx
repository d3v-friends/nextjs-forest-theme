"use client";
import {ReactNode, useEffect, useState} from "react";

interface Props {
	show: boolean;
	children: ReactNode;
	delay: number;
}

export default function ({show: init = false, children, delay = 300}: Readonly<Partial<Props>>) {
	const [show, onChangeShow] = useState(init);
	useEffect(() => {
		if (init) {
			onChangeShow(true);
			return;
		}

		setTimeout(() => onChangeShow(false), delay);
	}, [init]);

	if (!show) return null;

	return <div onAnimationEnd={() => onChangeShow(false)}>{children}</div>;
}
