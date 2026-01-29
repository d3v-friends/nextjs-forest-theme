"use client";
import React, {ReactNode} from "react";
import Elems from "./elems";
import {Modal} from "./index";
import {fnVoid} from "nextjs-tools";

const {Title, Body, Content, Ok, OkCancel} = Elems;

interface OkModal {
	title?: ReactNode;
	content?: ReactNode;
	onClickOk?: React.MouseEventHandler<HTMLButtonElement>;
	okButton?: ReactNode;
	bodyClassName?: string;
}

function ok({title, content, onClickOk = fnVoid, okButton, bodyClassName}: Readonly<OkModal>): Modal {
	return (onClose) => (
		<Body className={bodyClassName}>
			<Title>{title}</Title>
			<Content>{content}</Content>
			<Ok
				onClick={(e) => {
					e.stopPropagation();
					onClickOk(e);
					onClose();
				}}>
				{okButton}
			</Ok>
		</Body>
	);
}

interface OkCancelModal {
	title?: ReactNode;
	content?: ReactNode;
	onClickOk?: React.MouseEventHandler<HTMLButtonElement>;
	onClickCancel?: React.MouseEventHandler<HTMLButtonElement>;
	okButton?: ReactNode;
	cancelButton?: ReactNode;
	bodyClassName?: string;
}

function okCancel({
	title,
	content,
	onClickOk = fnVoid,
	okButton,
	onClickCancel = fnVoid,
	cancelButton,
	bodyClassName,
}: Readonly<OkCancelModal>): Modal {
	return (onClose) => (
		<Body className={bodyClassName}>
			<Title>{title}</Title>
			<Content>{content}</Content>
			<OkCancel
				onClickOk={(e) => {
					e.stopPropagation();
					onClickOk(e);
					onClose();
				}}
				onClickCancel={(e) => {
					e.stopPropagation();
					onClickCancel(e);
					onClose();
				}}
				okButton={okButton}
				cancelButton={cancelButton}
			/>
		</Body>
	);
}

export default {ok, okCancel};
