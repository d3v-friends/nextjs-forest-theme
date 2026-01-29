"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cls, ScrollTop, toStringBoolean } from "../../../index.js";
import { concat } from "nextjs-tools";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImgCaret from "web-asset/svg/regular/fi-rr-arrow-alt-circle-right.svg";
export default function ({ aside, isOpen, onChangeIsOpen, header }) {
    return (_jsx(ScrollTop, { children: ({ scrollTop }) => (_jsxs("aside", { className: concat(cls.background.panel, cls.transition.short, "p-5 rounded-2xl"), style: { marginTop: `${scrollTop}px` }, children: [_jsx(Header, { isOpen: isOpen, onChangeIsOpen: onChangeIsOpen, children: header }), aside.map((v, key) => (_jsx(Sector, Object.assign({ isOpen: isOpen }, v), key)))] })) }));
}
const LinkStyle = {
    header: {
        active: "border-transparent",
        inactive: "border-(--border)",
    },
    img: {
        active: "filter-(--info-filter)",
        inactive: "filter-(--info-filter) opacity-40 group-hover:opacity-80",
    },
    href: {
        active: "text-(--primary) font-bold brightness-50",
        inactive: "text-(--info)",
    },
    cont: {
        active: "bg-(--aside-select)",
        inactive: "bg-none group-hover:bg-(--aside-select)/40",
    },
};
function Sector({ title, links, isOpen }) {
    const path = usePathname();
    const isActive = (href) => {
        return path.startsWith(href) ? "active" : "inactive";
    };
    const isBool = (v) => (v ? "active" : "inactive");
    return (_jsxs("div", { className: "mb-3", children: [_jsx("div", { className: concat(cls.text.title, cls.transition.shortAll, LinkStyle.header[isBool(isOpen)], "font-extrabold text-sm mb-2 border-b h-5"), children: isOpen && title }), links.map((v, key) => (_jsx("div", { className: "group", children: _jsxs(Link, { href: v.href, className: concat("pl-4 pr-5 flex items-center mb-2 h-12", "rounded-xl group", "whitespace-nowrap", LinkStyle.cont[isActive(v.href)]), children: [_jsx(Image, { className: concat(LinkStyle.img[isActive(v.href)]), src: v.icon, alt: v.href, width: 20, height: 20 }), isOpen && (_jsx("div", { className: concat("overflow-hidden pl-2", LinkStyle.href[isActive(v.href)]), children: v.label }))] }) }, key)))] }));
}
const HeaderStyle = {
    cont: {
        true: "justify-between",
        false: "justify-center",
    },
    img: {
        true: "rotate-180",
        false: "rotate-0",
    },
};
function Header({ isOpen, onChangeIsOpen, children }) {
    return (_jsxs("div", { className: concat("flex items-center h-9 mb-1", HeaderStyle.cont[toStringBoolean(isOpen)]), children: [isOpen && _jsx("h3", { className: "text-(--info)", children: children }), _jsx("button", { className: "group", onClick: () => onChangeIsOpen(!isOpen), children: _jsx(Image, { className: concat("filter-(--info-filter) group-hover:opacity-100 opacity-40", cls.transition.short, HeaderStyle.img[toStringBoolean(isOpen)]), src: ImgCaret, alt: "opener", width: 30, height: 30 }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUtcGMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYXNpZGUtbmF2L2FzaWRlLXBjLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFjLEdBQUcsRUFBWSxTQUFTLEVBQWlCLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMvRixPQUFPLEVBQUMsTUFBTSxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFDN0IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLHdEQUF3RCxDQUFDO0FBUzlFLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQWtCO0lBQ2hGLE9BQU8sQ0FDTixLQUFDLFNBQVMsY0FDUixDQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBRSxDQUFDLENBQ2pCLGlCQUNDLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsRUFDaEYsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLEdBQUcsU0FBUyxJQUFJLEVBQUMsYUFDcEMsS0FBQyxNQUFNLElBQ04sTUFBTSxFQUFFLE1BQU0sRUFDZCxjQUFjLEVBQUUsY0FBYyxZQUM3QixNQUFNLEdBQ0MsRUFFUixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDdEIsS0FBQyxNQUFNLGtCQUNOLE1BQU0sRUFBRSxNQUFNLElBRVYsQ0FBQyxHQURBLEdBQUcsQ0FFUCxDQUNGLENBQUMsSUFDSyxDQUNS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