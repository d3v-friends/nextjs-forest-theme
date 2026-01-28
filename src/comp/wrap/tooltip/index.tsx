"use client";
import React, {ReactNode, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {concat, Coordinate, FnBase, initCoordinate, initPosition, Position} from "nextjs-tools";
import {Direction} from "@src/types";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	tooltip?: ReactNode;
	direction?: Direction;
}

export default function ({onMouseEnter, onMouseLeave, tooltip, direction, ...opts}: Readonly<Partial<Props>>) {
	const divRef = useRef<HTMLSpanElement>(null);
	const [position, onChangePosition] = useState<Position>(initPosition);
	const [show, onChangeShow] = useState(false);

	const onChangeRect = () => {
		if (!divRef.current) return;
		const {top, left, width, height} = divRef.current.getBoundingClientRect();
		onChangePosition({left, width, height, top: top + window.scrollY});
	};

	return (
		<>
			<span
				{...opts}
				ref={divRef}
				onMouseEnter={(e) => {
					onMouseEnter ? onMouseEnter(e) : "";
					onChangeShow(true);
					onChangeRect();
				}}
				onMouseLeave={(e) => {
					onMouseLeave ? onMouseLeave(e) : "";
					onChangeShow(false);
				}}
			/>
			{show && (
				<Tooltip
					onChangeShow={onChangeShow}
					parent={position}
					direction={direction}>
					{tooltip}
				</Tooltip>
			)}
		</>
	);
}

interface TooltipProps {
	parent: Position;
	children?: ReactNode;
	onChangeShow: FnBase<boolean>;
	direction?: Direction;
}

function Tooltip({parent, children, onChangeShow, direction = "bottom"}: Readonly<TooltipProps>) {
	const divRef = useRef<HTMLDivElement>(null);
	const [init, onChangeInit] = useState(false);
	const [pos, onChangePos] = useState<Coordinate>(initCoordinate);

	useLayoutEffect(() => {
		if (!divRef.current) return;
		const child = divRef.current.getBoundingClientRect();
		const left = Math.floor(parent.left + (parent.width - child.width) / 2);
		const top = Math.floor(parent.top + (parent.height - child.height) / 2);
		const space = 10;

		let next: Coordinate = {top: 0, left: 0};
		switch (direction) {
			case "left":
				next = {top: top, left: parent.left - child.width - space};
				break;
			case "right":
				next = {top: top, left: parent.left + parent.width + space};
				break;
			case "bottom":
				next = {top: parent.top + parent.height + space, left: left};
				break;
			case "top":
				next = {top: parent.top - parent.height, left: left};
				break;
		}

		onChangePos(next);
		onChangeInit(true);
	}, []);

	return createPortal(
		<div
			ref={divRef}
			className={concat(
				"absolute border border-(--border) rounded pl-2 pr-2 pt-1 pb-1 bg-white shadow-xl",
				init ? "opacity-100" : "opacity-0"
			)}
			style={{...pos}}
			onMouseEnter={() => onChangeShow(true)}
			onMouseLeave={() => onChangeShow(false)}>
			{children}
		</div>,
		document.body
	);
}
