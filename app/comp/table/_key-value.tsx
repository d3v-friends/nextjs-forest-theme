import React from "react";
import {KeyValue, strconv} from "@src";

export default function () {
	return (
		<KeyValue
			items={[
				{label: "ID", value: "username"},
				{label: "Name", value: "John Doe", prefix: "Mister"},
				{label: "Email", value: "john.doe@example.com"},
				{label: "Balance", value: strconv.toSplitNumber(10000), suffix: "$"},
			]}
		/>
	);
}
