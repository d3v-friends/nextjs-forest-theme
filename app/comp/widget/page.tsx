"use client";
import React, {useEffect, useRef, useState} from "react";
import {Color, ProgressBar} from "@src";

const colors: Color[] = ["primary", "danger", "success", "warning", "info"];

export default function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<ProgressBarWidget />
		</div>
	);
}

function ProgressBarWidget() {
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
			<h3 className="mb-2">Progress bar</h3>

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
