export type StringBoolean = "true" | "false";

export function fromStringBoolean(str: StringBoolean): boolean {
	return str === "true";
}

export function toStringBoolean(bool: boolean): StringBoolean {
	return bool ? "true" : "false";
}

export type IsActive = "active" | "inactive";
export type NodeEnv = "development" | "production" | "test";

// styles
export type StyleBoolean = Record<StringBoolean, string>;

// color
export type Color = "primary" | "danger" | "info" | "success" | "warning";
