"use client";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {Color, IconHeader, ProgressBar} from "@src";
import ImgProgress from "web-asset/svg/regular/fi-rr-bars-progress.svg";

interface Props {
	children: ReactNode;
}

const colors: Color[] = ["primary", "danger", "success", "warning", "info"];

export default function ({children}: Readonly<Partial<Props>>) {
	const max = 10000;
	const step = 1000;
	const [value, setValue] = useState(0);
	const valueRef = useRef(value);
	const setValueRef = useRef(setValue);

	useEffect(() => {
		const interval = setInterval(() => {
			valueRef.current += step;
			if (max < valueRef.current) valueRef.current = 0;
			setValueRef.current(valueRef.current);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section>
			<IconHeader
				icon={ImgProgress}
				label="details">
				Progress bar
			</IconHeader>

			{colors.map((color, key) => (
				<ProgressBar
					key={key}
					max={max}
					value={value}
					color={color}
					detail
				/>
			))}
		</section>
	);
}
