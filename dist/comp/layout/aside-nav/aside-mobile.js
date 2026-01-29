"use client";
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { concat } from "nextjs-tools";
import ImgPlus from "web-asset/svg/regular/fi-rr-plus.svg";
import Image from "next/image";
import { DelayUnmount, ScrollLock } from "../../../index.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ({ aside = [], header = "" }) {
    const [init, onChangeInit] = useState(false);
    const [open, onChangeOpen] = useState(false);
    useEffect(() => {
        onChangeInit(true);
    }, []);
    return (init && (_jsxs(_Fragment, { children: [_jsx(Aside, { open, onChangeOpen, aside }), createPortal(_jsx("div", { className: concat("lg:hidden fixed right-4 bottom-8 z-(--z-floating)", "group h-15 w-15 rounded-full overflow-hidden shadow-xl"), children: _jsx("button", { className: concat("w-full h-full", "flex items-center justify-center", "bg-(--primary)/70  group-active:bg-(--primary)"), onClick: () => onChangeOpen(!open), children: _jsx(Image, { className: concat("filter-(--info-filter) group-hover:opacity-100 opacity-50"), src: ImgPlus, alt: "opener", width: 25, height: 25 }) }) }), document.body)] })));
}
function Aside({ open, onChangeOpen, aside }) {
    return (_jsx(DelayUnmount, { show: open, children: _jsx(_Fragment, { children: createPortal(_jsx(ScrollLock, { children: _jsx("div", { className: concat("fixed top-0 w-full h-full z-(--z-floating)", "backdrop-blur-xl animated bg-(--suspend)"), onMouseUp: () => onChangeOpen(false), children: _jsx("div", { className: concat("absolute h-full w-4/5 bg-(--nav) p-5"), onMouseUp: (e) => e.stopPropagation(), children: aside.map((sector, key) => (_createElement(Sector, Object.assign({}, sector, { onChangeOpen: onChangeOpen, key: key })))) }) }) }), document.body) }) }));
}
function Sector({ title, links, onChangeOpen }) {
    return (_jsxs(_Fragment, { children: [_jsx("h6", { className: "text-(--info) text-sm mb-2", children: title }), links.map((link, key2) => (_createElement(LinkButton, Object.assign({}, link, { onChangeOpen: onChangeOpen, key: key2 }))))] }));
}
const LinkStyle = {
    link: {
        active: "bg-(--aside-select) font-extrabold",
        inactive: "text-(--info)",
    },
    img: {
        active: "opacity-100",
        inactive: "opacity-20",
    },
};
function LinkButton({ icon, label, href, onChangeOpen }) {
    const pathname = usePathname();
    const isActivated = pathname.startsWith(href) ? "active" : "inactive";
    return (_jsxs(Link, { className: concat("flex pl-4 h-13 flex items-center mb-2 rounded-xl", LinkStyle.link[isActivated]), href: href, onMouseDown: (e) => {
            e.stopPropagation();
            onChangeOpen(false);
        }, children: [icon && (_jsx(Image, { className: concat("mr-2 filter-(--info-filter)", LinkStyle.img[isActivated]), src: icon, alt: href, width: 20, height: 20 })), label] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUtbW9iaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvbGF5b3V0L2FzaWRlLW5hdi9hc2lkZS1tb2JpbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0FBQ2IsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNELE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQStCLFlBQVksRUFBWSxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDMUYsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU81QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUEyQjtJQUMzRSxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU3QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTixJQUFJLElBQUksQ0FDUCw4QkFDQyxLQUFDLEtBQUssSUFBTSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssR0FBSyxFQUV6QyxZQUFZLENBQ1osY0FDQyxTQUFTLEVBQUUsTUFBTSxDQUNoQixt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