import React, {ReactNode} from "react";
import {Color} from "../../../types";
import {cls} from "@src/fn";
import {concat} from "nextjs-tools";

interface Props {
	children: ReactNode;
	className: string;
	color: Color;
	right: ReactNode;
}

export default function ({children, className, color = "primary", right}: Readonly<Partial<Props>>) {
	return (
		<div className={className}>
			<div className="flex items-center">
				<h1 className={concat(cls.text[color], cls.font.raleway)}>{children}</h1>
				{right && (
					<>
						<div className="grow" />
						{right}
					</>
				)}
			</div>
		</div>
	);
}
