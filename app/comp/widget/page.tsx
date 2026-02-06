"use client";
import React from "react";
import EnumWidget from "./_enum";
import ProgressBarWidget from "./_progress-bar";
import ValueWidget from "./_value";

export default function () {
	return (
		<div className="grid grid-cols-1 gap-2 lg:gap-4">
			<ProgressBarWidget />
			<EnumWidget />
			<ValueWidget />
		</div>
	);
}
