import React from "react";

export type HTMLInputModeAttribute = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
export type InputInterceptor = (e: React.ChangeEvent<HTMLInputElement>) => string;
export type OnClickCheckboxInterceptor = (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => boolean;

export const DefaultInputInterceptor: InputInterceptor = (e) => e.target.value;
export const DefaultOnClickCheckboxInterceptor: OnClickCheckboxInterceptor = (e, value) => {
	e.stopPropagation();
	return value;
};
