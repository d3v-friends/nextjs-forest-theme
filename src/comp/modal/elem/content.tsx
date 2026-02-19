import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
}

export default function ({children}: Readonly<Partial<Props>>) {
	return <article className="pl-3 pr-3 pt-2 pb-2">{children}</article>;
}
