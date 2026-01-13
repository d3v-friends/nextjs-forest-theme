"use server";
import {NextPageProps} from "nextjs-tools";
import React from "react";

export default async function ({searchParams}: NextPageProps) {
	return <div className="grid grid-cols-1 gap-2 lg:gap-4"></div>;
}
