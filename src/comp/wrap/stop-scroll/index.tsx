"use client";
import {ReactNode, useEffect} from "react";

interface Props {
	children?: ReactNode;
	scrollable?: boolean;
}

export default function ({scrollable = false, children}: Readonly<Props>) {
	useEffect(() => {
		document.body.style.overflow = scrollable ? "unset" : "hidden";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [scrollable]);

	return children;
}
