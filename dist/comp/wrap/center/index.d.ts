import React from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
}
export default function ({ className, ...attr }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
