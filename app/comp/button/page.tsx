"use server";
import React, {ReactNode} from "react";
import {ButtonColor} from "@src";
import {concat} from "nextjs-tools";

const colors: ButtonColor[] = ["primary", "danger", "success", "warning", "info"];

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<section>
				<h3>filled</h3>
				<Cont>
					{colors.map((color, key) => (
						<button
							className={concat("filled", color)}
							key={key}>
							{color}
						</button>
					))}
				</Cont>
			</section>

			<section>
				<h3>outlined</h3>
				<Cont>
					{colors.map((color, key) => (
						<button
							className={concat("outlined", color)}
							key={key}>
							{color}
						</button>
					))}
				</Cont>
			</section>

			<section>
				<h3>lined</h3>
				<Cont>
					{colors.map((color, key) => (
						<button
							className={concat("lined", color)}
							key={key}>
							{color}
						</button>
					))}
				</Cont>
			</section>
		</div>
	);
}

function Cont({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <div className="grid grid-cols-5 gap-2 lg:gap-4">{children}</div>;
}
