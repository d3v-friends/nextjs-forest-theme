"use server";
import {HTML} from "@src";
import {NextLayoutProps} from "nextjs-tools";

export default async function ({children}: NextLayoutProps) {
	return <HTML>{children}</HTML>;
}
