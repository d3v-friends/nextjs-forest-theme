"use server";
import React, {ReactNode} from "react";
import {Button, ButtonColor, ButtonLine, ButtonOutline, Panel, PanelTitle} from "@src";

const colors: ButtonColor[] = ["primary", "danger", "success", "warning", "info"];

export default async function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle right={<Button>Click</Button>}>Fill</PanelTitle>
				<Cont>
					{colors.map((color, key) => (
						<Button
							color={color}
							key={key}>
							{color}
						</Button>
					))}
				</Cont>
			</Panel>

			<Panel>
				<PanelTitle>Outline</PanelTitle>
				<Cont>
					{colors.map((color, key) => (
						<ButtonOutline
							color={color}
							key={key}>
							{color}
						</ButtonOutline>
					))}
				</Cont>
			</Panel>

			<Panel>
				<PanelTitle>Line</PanelTitle>
				<Cont>
					{colors.map((color, key) => (
						<ButtonLine
							color={color}
							key={key}>
							{color}
						</ButtonLine>
					))}
				</Cont>
			</Panel>
		</div>
	);
}

function Cont({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <div className="grid grid-cols-5 gap-2 lg:gap-4">{children}</div>;
}
