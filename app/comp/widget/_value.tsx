import React from "react";
import {ValueBase, ValueNumber, ValueObjectId, ValueTime} from "@src";
import ImgCursor from "web-asset/svg/regular/fi-rr-cursor.svg";

export default function () {
	return (
		<section>
			<h4 className="primary">Value</h4>
			<div className="grid grid-cols-5 gap-2 lg:gap-4">
				<ValueBase icon={ImgCursor}>BASE</ValueBase>
				<ValueBase
					icon={ImgCursor}
					copyable>
					Copyable
				</ValueBase>
				<ValueObjectId copyable>OBJECTID_ABCDE</ValueObjectId>
				<ValueNumber
					suffix="$"
					copyable>
					10000
				</ValueNumber>
				<ValueTime copyable>{new Date()}</ValueTime>
			</div>
		</section>
	);
}
