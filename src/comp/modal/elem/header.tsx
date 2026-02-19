"use client";
import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
}

export default function ({children}: Readonly<Partial<Props>>) {
	if (!children) return;
	return <h3 className="header primary pl-3 pr-3 pt-2">{children}</h3>;
}
