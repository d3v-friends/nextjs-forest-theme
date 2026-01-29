"use client";
import React, {ReactNode} from "react";
import {cls} from "../..";
import {concat} from "nextjs-tools";

const Style = {
	padding: "p-3",
	paddingTitle: "pt-3 pl-3 pr-3 pb-1",
	paddingContent: "pt-1 pl-3 pr-3 pb-3",
};

function Title({children}: Readonly<{children?: ReactNode}>) {
	if (!children) return <div className="h-2" />;
	return <div className={concat("text-xl font-bold", Style.paddingTitle, cls.text.deepPrimary)}>{children}</div>;
}

function Content({children}: Readonly<{children?: ReactNode}>) {
	if (!children) return null;
	return <div className={concat("text-(--info)", Style.paddingContent)}>{children}</div>;
}

interface OkProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
}

function Ok({onClick, children = "확인"}: Readonly<OkProps>) {
	return (
		<div className={concat("flex justify-end", Style.padding)}>
			<button
				className="filled"
				onClick={onClick}>
				{children}
			</button>
		</div>
	);
}

interface OkCancelProps {
	onClickOk?: React.MouseEventHandler<HTMLButtonElement>;
	onClickCancel?: React.MouseEventHandler<HTMLButtonElement>;
	okButton?: ReactNode;
	cancelButton?: ReactNode;
}

function OkCancel({onClickOk, onClickCancel, okButton = "확인", cancelButton = "취소"}: Readonly<OkCancelProps>) {
	return (
		<div className={concat("flex justify-end", Style.padding)}>
			<button
				onClick={onClickOk}
				className="lined mr-2">
				{cancelButton}
			</button>
			<button
				className="filled"
				onClick={onClickCancel}>
				{okButton}
			</button>
		</div>
	);
}

interface BodyProps {
	children?: ReactNode;
	className?: string;
}

function Body({children, className = "min-w-[300px]"}: Readonly<BodyProps>) {
	return (
		<div className={concat(cls.background.panel, cls.shadow.normal, "border-1 border-(--border)", className)}>
			{children}
		</div>
	);
}

export default {
	Title,
	Content,
	Body,
	Ok,
	OkCancel,
};
