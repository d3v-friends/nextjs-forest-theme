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

export default function (dropdown: DropdownChildren = () => "", opts: Partial<Options> = {}): [Wrapper] {
	const [open, setOpen] = useState(false);
	const [pos, setPos] = useState<Position>(initPosition);

	const setOpenRef = useRef(setOpen);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (!buttonRef.current) return;
		const {top, left, width, height} = buttonRef.current.getBoundingClientRect();
		setPos({top, left, width, height});
		setOpen(!open);
	};

	useEffect(() => {
		const handler = () => {
			setOpenRef.current(false);
		};

		window.addEventListener("resize", handler);
		window.addEventListener("scroll", handler);

		return () => {
			window.removeEventListener("resize", handler);
			window.removeEventListener("scroll", handler);
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
							<Dropdown parent={pos}>{dropdown({...pos, onClose: () => setOpen(false)})}</Dropdown>
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
}

// todo 여기부터 다시 하기
function Dropdown({parent, children}: Readonly<DropdownProps>) {
	const [isInit, setIsInit] = useState(false);
	const [pos, setPos] = useState<Coordinate>(initPosition);
	const contRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!contRef.current) return;
		const {width} = contRef.current.getBoundingClientRect();
		let left = parent.left;

		if (document.body.getBoundingClientRect().width - width < 0) {
			left = (window.innerWidth - width) / 2;
		}

		setPos({
			left,
			top: parent.top + parent.height + window.scrollY,
		});

		setIsInit(true);
	}, [parent]);

	return (
		<div
			className={concat("absolute ", isInit ? "opacity-100" : "opacity-0")}
			style={{left: pos.left, top: pos.top}}
			ref={contRef}>
			{children}
		</div>
	);
}
