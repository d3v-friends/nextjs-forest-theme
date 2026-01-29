import { ReactNode } from "react";
interface LinkButtonProp {
    children?: ReactNode;
    href?: string;
    activated?: boolean;
}
declare function LinkButton({ href, children, activated }: Readonly<LinkButtonProp>): import("react/jsx-runtime").JSX.Element;
interface PrevProp {
    activated: boolean;
    href?: string;
}
declare function Prev({ activated, href }: Readonly<PrevProp>): import("react/jsx-runtime").JSX.Element | null;
interface NextProp {
    activated: boolean;
    href?: string;
}
declare function Next({ href, activated }: Readonly<NextProp>): import("react/jsx-runtime").JSX.Element | null;
declare const _default: {
    LinkButton: typeof LinkButton;
    Prev: typeof Prev;
    Next: typeof Next;
};
export default _default;
