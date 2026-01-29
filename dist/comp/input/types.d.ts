import React from "react";
export type HTMLInputModeAttribute = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
export type InputInterceptor = (e: React.ChangeEvent<HTMLInputElement>) => string;
export type OnClickCheckboxInterceptor = (e: React.MouseEvent<HTMLButtonElement>, value: boolean) => boolean;
export declare const DefaultInputInterceptor: InputInterceptor;
export declare const DefaultOnClickCheckboxInterceptor: OnClickCheckboxInterceptor;
