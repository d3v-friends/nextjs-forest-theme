import { Props as BaseProps } from "../base/index";
import { FnBase, Nullable } from "nextjs-tools";
interface Props extends Omit<BaseProps, "value" | "onChange" | "onChangeInterceptor" | "type"> {
    value: Nullable<number>;
    onChange: FnBase<Nullable<number>>;
}
export default function ({ value, onChange, onBlur, ...attr }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export type NumberType = "integer" | "decimal";
export {};
