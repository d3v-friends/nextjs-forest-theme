import { ReactNode } from "react";
import MobileMenu from "./menu-mobile";
declare function Container({ children }: Readonly<{
    children?: ReactNode;
}>): import("react/jsx-runtime").JSX.Element;
declare function Logo({ children, href, className, }: Readonly<{
    children?: ReactNode;
    href?: string;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
declare function Left({ children, className }: Readonly<{
    children?: ReactNode;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
declare function Right({ children }: Readonly<{
    children?: ReactNode;
}>): import("react/jsx-runtime").JSX.Element;
declare function LinkButton({ children, href, className, }: Readonly<{
    children?: ReactNode;
    href: string;
    className?: string;
}>): import("react/jsx-runtime").JSX.Element;
declare const _default: {
    Container: typeof Container;
    Logo: typeof Logo;
    Left: typeof Left;
    Right: typeof Right;
    LinkButton: typeof LinkButton;
    MobileMenu: typeof MobileMenu;
};
export default _default;
