"use client";
import React, {ReactNode} from "react";
import {Button, genModal, Panel, PanelTitle, useModal} from "@src";

export default function () {
	const [modal, setModal] = useModal();

	const onClickOk = () => {
		setModal(
			genModal.ok({
				title: "ok",
				content: "ok content",
			}),
			{backdrop: false}
		);
	};

	const onClickOkCancel = () => {
		setModal(
			genModal.okCancel({
				title: "ok cancel",
				content: "ok cancel content",
			}),
			{backdrop: false}
		);
	};

	return modal(
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<Panel>
				<PanelTitle>Modal</PanelTitle>
				<Cont>
					<Button onClick={onClickOk}>Ok</Button>
					<Button
						onClick={onClickOkCancel}
						color="danger">
						OkCancel
					</Button>
				</Cont>
			</Panel>
		</div>
	);
}

function Cont({children}: Readonly<{children?: ReactNode | ReactNode[]}>) {
	return <div className="grid grid-cols-5 gap-2 lg:gap-4">{children}</div>;
}
