"use client";
import React, {ReactNode, useState} from "react";
import {FnVoid, Nullable} from "nextjs-tools";
import ModalCont from "./modal-cont";

interface Props {
	modal: Modal;
	attribute: Partial<Attribute>;
}

interface Attribute {
	backdrop: boolean;
	style: StyleType;
}

export type StyleType = "transparent" | "grayscale";
export type Modal = (onClose: FnVoid) => ReactNode;

type Wrapper = (children: ReactNode) => ReactNode;
type ModalFunction = (modal: Modal, attribute?: Partial<Attribute>) => void;

// todo 추후 리펙토링 하기
export default function (): [Wrapper, ModalFunction] {
	const [content, setContent] = useState<Nullable<Props>>(null);

	return [
		(children) => (
			<>
				{children}
				{content && (
					<ModalCont
						onClose={() => setContent(null)}
						style={content.attribute.style}
						isBackdrop={content.attribute.backdrop}>
						{content.modal}
					</ModalCont>
				)}
			</>
		),
		(modal, attribute = {}) => {
			setContent({
				modal,
				attribute,
			});
		},
	];
}
