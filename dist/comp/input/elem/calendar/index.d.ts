import { FnBase, Nullable } from "nextjs-tools";
interface Props {
    value: Nullable<Date>;
    onChange: FnBase<Nullable<Date>>;
    locale?: string;
    timezone?: string;
    className?: string;
}
export default function ({ value, onChange, locale, timezone, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
