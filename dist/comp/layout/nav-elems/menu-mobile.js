"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ImgMenu from "web-asset/svg/regular/fi-rr-menu-burger.svg";
import Image from "next/image";
import { concat } from "nextjs-tools";
import { createPortal } from "react-dom";
import { ScrollLock } from "../../../index.js";
import ImgClose from "web-asset/svg/regular/fi-rr-arrow-circle-left.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function (_a) {
    var { className = "", items = [], logo = null } = _a, opts = __rest(_a, ["className", "items", "logo"]);
    const [open, onChangeOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("button", Object.assign({}, opts, { className: concat("lg:hidden group", className), onClick: () => onChangeOpen(!open), children: _jsx(Image, { className: concat("filter-(--info-filter) opacity-70 group-hover:opacity-100"), src: ImgMenu, alt: "menu", width: 25, height: 25 }) })), _jsx(Aside, { open: open, onChangeOpen: onChangeOpen, items: items, logo: logo })] }));
}
function Aside({ open, onChangeOpen, logo, items }) {
    if (!open)
        return null;
    return (_jsx(ScrollLock, { children: createPortal(_jsx("aside", { className: concat("fixed top-0 left-0 w-full h-full z-(--z-floating)", "bg-(--suspend) backdrop-blur"), onMouseUp: () => onChangeOpen(false), children: _jsxs("div", { className: concat("w-4/5 h-full top-0 left-0 p-5", "bg-(--nav)"), onMouseUp: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("h4", { className: "grow", children: logo }), _jsx("button", { className: "group", onClick: () => onChangeOpen(false), children: _jsx(Image, { className: "filter-(--info-filter) opacity-70 group-hover:opacity-100", src: ImgClose, alt: "close", width: 25, height: 25 }) })] }), items.map((item, key) => (_createElement(Item, Object.assign({}, item, { key: key, onChangeOpen: onChangeOpen }))))] }) }), document.body) }));
}
const ItemStyle = {
    active: "font-extrabold underline text-(--primary) brightness-70",
    inactive: "text-(--info)",
};
function Item({ href, label, onChangeOpen }) {
    const pathname = usePathname();
    const height = "h-10";
    const target = typeof label === "function" ? label(() => onChangeOpen(false)) : label;
    if (!href)
        return _jsx("div", { className: concat("flex items-center", height), children: target });
    const isActivated = pathname.startsWith(href) ? "active" : "inactive";
    return (_jsx(Link, { className: concat("flex items-center", height, ItemStyle[isActivated]), href: href, onMouseUp: () => onChangeOpen(false), children: target }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1tb2JpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvbmF2LWVsZW1zL21lbnUtbW9iaWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBQ2IsT0FBYyxFQUFZLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLE9BQU8sTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUFDLE1BQU0sRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQVcsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQzlDLE9BQU8sUUFBUSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pFLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFjNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUE0RTtRQUE1RSxFQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxPQUFvQyxFQUEvQixJQUFJLGNBQWpELDhCQUFrRCxDQUFEO0lBQ3pFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdDLE9BQU8sQ0FDTiw4QkFDQyxpQ0FDSyxJQUFJLElBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsRUFDL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUNsQyxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLDJEQUEyRCxDQUFDLEVBQzlF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