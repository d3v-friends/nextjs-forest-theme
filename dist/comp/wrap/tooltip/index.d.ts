import React, { ReactNode } from "react";
import { Direction } from "../../../types";
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    tooltip?: ReactNode;
    direction?: Direction;
}
export default function ({ onMouseEnter, onMouseLeave, tooltip, direction, ...opts }: Readonly<Partial<Props>>): import("react/jsx-runtime").JSX.Element;
export {};
