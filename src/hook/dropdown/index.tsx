"use client";
import {MouseEventHandler, ReactNode, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {concat, FnVoid, initPosition, Position} from "nextjs-tools";

type Wrapper = (children: (isOpen: boolean) => ReactNode) => ReactNode;

export type DropdownChildren = (props: Position & {onClose: FnVoid}) => ReactNode;

// todo 드롭다운 좌우 정렬 축 기준 추가하기
export default function (dropdown: DropdownChildren = () => "", align: "left" | "right" = "left"): [Wrapper] {
	const [open, setOpen] = useState(false);
	const [pos, setPos] = useState<Position>(initPosition);
	const setPosRef = useRef(setPos);
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
		};
		window.addEventListener("resize", handler);

		return () => {
			window.removeEventListener("resize", handler);
		};
	}, []);

	return [
		(children) => (
			<>
				<button
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
							<div
								style={{left: pos.left, top: pos.top + pos.height}}
								className={concat("absolute")}>
								{dropdown({...pos, onClose: () => setOpen(false)})}
							</div>
						</>,
						document.body
					)}
			</>
		),
	];
}
