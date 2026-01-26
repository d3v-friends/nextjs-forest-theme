"use client";
import React, {useEffect, useRef, useState} from "react";
import {Color, ProgressBar} from "@src";

const colors: Color[] = ["primary", "danger", "success", "warning", "info"];

export default function () {
	const max = 100;
	const [value, setValue] = useState(0);
	const valueRef = useRef(value);
	const setValueRef = useRef(setValue);

	useEffect(() => {
		const interval = setInterval(() => {
			valueRef.current += 10;
			if (100 < valueRef.current) valueRef.current = 0;
			setValueRef.current(valueRef.current);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>Page</h3>
				{colors.map((color, key) => (
					<ProgressBar
						key={key}
						max={max}
						value={value}
						color={color}
					/>
				))}
			</section>
		</div>
	);
}
