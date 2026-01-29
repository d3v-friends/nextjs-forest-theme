export type StringBoolean = "true" | "false";
export declare function fromStringBoolean(str: StringBoolean): boolean;
export declare function toStringBoolean(bool: boolean): StringBoolean;
export type IsActive = "active" | "inactive";
export type NodeEnv = "development" | "production" | "test";
export type StyleBoolean = Record<StringBoolean, string>;
export type Color = "primary" | "danger" | "info" | "success" | "warning";
export type Direction = "top" | "bottom" | "left" | "right";
