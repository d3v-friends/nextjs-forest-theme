import React from "react";
import {ErrorPage} from "@src";

export default async function () {
	return (
		<div className="h-[calc(100vh-90px)]">
			<ErrorPage error={new Error("on error")}>description</ErrorPage>
		</div>
	);
}
