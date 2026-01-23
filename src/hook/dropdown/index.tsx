"use client";
import {MouseEventHandler, ReactNode, useEffect, useLayoutEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {concat, Coordinate, FnVoid, initPosition, Position} from "nextjs-tools";

type Wrapper = (children: (isOpen: boolean) => ReactNode) => ReactNode;

export type DropdownChildren = (props: Position & {onClose: FnVoid}) => ReactNode;

export interface Options {
	align: "left" | "right";
	className: string;
}

// todo 드롭다운 좌우 정렬 축 기준 추가하기
// 좌우 폭이 좁을때 가운대로 몰아주는 기능 추가하기
export default function (dropdown: DropdownChildren = () => "", opts: Partial<Options> = {}): [Wrapper] {
	const [open, setOpen] = useState(false);
	const [pos, setPos] = useState<Position>(initPosition);
	const [width, setWidth] = useState(0);
	const setPosRef = useRef(setPos);
	const setWidthRef = useRef(setWidth);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (!buttonRef.current) return;

		const {top, left, width, height} = buttonRef.current.getBoundingClientRect();
		setPos({top, left, width, height});
		setOpen(!open);
	};

	useEffect(() => {
		const handler = () => {
			if (!buttonRef.current) return;
			const {top, left, width, height} = buttonRef.current.getBoundingClientRect();
			setPosRef.current({top, left, width, height});
			setWidthRef.current(document.body.getBoundingClientRect().width);
		};

		window.addEventListener("resize", handler);
		setWidthRef.current(document.body.getBoundingClientRect().width);

		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);

	const {className} = opts;

	return [
		(children) => (
			<>
				<button
					className={concat(className || "", "no-drag")}
					type="button"
					ref={buttonRef}
					onClick={onClick}>
					{children(open)}
				</button>

				{open &&
					createPortal(
						<>
							<div
								className="absolute top-0 left-0 w-full h-full"
								onClick={(e) => {
									e.stopPropagation();
									setOpen(false);
								}}
							/>
							<Dropdown
								windowWidth={width}
								parent={pos}>
								{dropdown({...pos, onClose: () => setOpen(false)})}
							</Dropdown>
						</>,
						document.body
					)}
			</>
		),
	];
}

interface DropdownProps {
	parent: Position;
	children?: ReactNode;
	windowWidth: number;
}

function Dropdown({parent, children, windowWidth}: Readonly<DropdownProps>) {
	const [isInit, setIsInit] = useState(false);
	const [pos, setPos] = useState<Coordinate>(initPosition);
	const contRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!contRef.current) return;
		const {width} = contRef.current.getBoundingClientRect();

		if (windowWidth < width) {
			setPos({
				top: parent.top + parent.height,
				left: windowWidth - width,
			});
		} else {
			setPos({
				top: parent.top + parent.height,
				left: parent.left,
			});
		}

		setIsInit(true);
	}, [parent, windowWidth]);

	return (
		<div
			className={concat("absolute ", isInit ? "opacity-100" : "opacity-0")}
			style={{left: pos.left, top: pos.top}}
			ref={contRef}>
			{children}
		</div>
	);
}
