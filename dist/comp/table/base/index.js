"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getSorter, toggleSort } from "../types.js";
import { concat, fnVoid, useRouterTools } from "nextjs-tools";
import { cls } from "../../../fn/index.js";
import ImgUpCaret from "web-asset/svg/regular/fi-rr-caret-up.svg";
import ImgDownCaret from "web-asset/svg/regular/fi-rr-caret-down.svg";
import ImgDash from "web-asset/svg/regular/fi-rr-minus-small.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default function ({ columns = [], list = [], className = "w-full mb-8", onClick = fnVoid, onMiddleClick = fnVoid, emptyChildren, }) {
    return (_jsxs("table", { className: concat(cls.border.bottom, className), children: [_jsx(Thead, { columns: columns }), _jsx(Tbody, { className: className, columns: columns, onClick: onClick, onMiddleClick: onMiddleClick, list: list, emptyChildren: emptyChildren })] }));
}
function Tbody({ columns, list, onClick, onMiddleClick, emptyChildren }) {
    return (_jsxs("tbody", { children: [list.map((row, k1) => (_jsx(TbodyTr, { onClick: onClick, onMiddleClick: onMiddleClick, row: row, children: columns.map((col, k2) => (_jsx(TbodyTd, { column: col, children: row }, k2))) }, k1))), list.length === 0 && _jsx(TbodyEmpty, { cols: columns.length, children: emptyChildren })] }));
}
function TbodyEmpty({ cols, children = _jsx("div", { className: "h-16 text-center flex items-center justify-center text-(--info)", children: "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }), }) {
    return (_jsx("tr", { children: _jsx("td", { colSpan: cols, children: children }) }));
}
function TbodyTr({ children, onClick, onMiddleClick, row, }) {
    const onMouseUp = (e) => {
        switch (e.button) {
            case 0:
                onClick(e, row);
                break;
            case 1:
                onMiddleClick(e, row);
                break;
        }
    };
    return (_jsx("tr", { className: concat("group"), onMouseUp: onMouseUp, children: children }));
}
function TbodyTd({ children, column }) {
    const { classNames, row } = column;
    const { tbody = "text-center" } = classNames || {};
    if (!row)
        return _jsx("td", { className: concat(tbody) });
    return (_jsx("td", { className: concat(cls.border.bottom, "pt-2 pb-2 h-16", "group-hover:bg-(--panel)", tbody), children: row(children) }));
}
function Thead({ columns }) {
    return (_jsx("thead", { className: concat(cls.border.bottom), children: _jsx("tr", { children: columns.map((v, key) => (_jsx(TheadTd, { item: v }, key))) }) }));
}
function TheadTd({ item }) {
    const { classNames } = item;
    const { thead = "text-center" } = classNames || {};
    return (_jsx("td", { className: concat(thead, "pt-2 pb-2  text-(--info) text-sm"), children: _jsx(TheadLabel, { item: item }) }));
}
function TheadLabel({ item }) {
    const router = useRouterTools();
    const { label, key } = item;
    if (!key)
        return label;
    const param = useSearchParams();
    const [sort, setSort] = useState(getSorter(param.get(key) || ""));
    useEffect(() => {
        setSort(getSorter(param.get(key) || ""));
    }, [param]);
    let icon = ImgDash;
    switch (sort) {
        case "asc":
            icon = ImgUpCaret;
            break;
        case "desc":
            icon = ImgDownCaret;
            break;
    }
    const onClick = (e) => {
        router.pushBySearchParams({ [key]: toggleSort(sort) });
    };
    const imgColor = {
        asc: "filter-(--danger-filter)",
        desc: "filter-(--success-filter)",
        none: "filter-(--info-filter)",
    };
    return (_jsxs("button", { type: "button", className: concat("inline-flex items-center"), onClick: onClick, children: [_jsx(Image, { className: concat("w-5 mr-1", imgColor[sort]), src: icon, alt: "caret", width: 20, height: 20 }), label] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBd0MsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sVUFBVSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xFLE9BQU8sWUFBWSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RFLE9BQU8sT0FBTyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFhaEQsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUMzQixPQUFPLEdBQUcsRUFBRSxFQUNaLElBQUksR0FBRyxFQUFFLEVBQ1QsU0FBUyxHQUFHLGFBQWEsRUFDekIsT0FBTyxHQUFHLE1BQU0sRUFDaEIsYUFBYSxHQUFHLE1BQU0sRUFDdEIsYUFBYSxHQUNnQjtJQUM3QixPQUFPLENBQ04saUJBQU8sU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsYUFDckQsS0FBQyxLQUFLLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxFQUMzQixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsU0FBUyxFQUNwQixPQUFPLEVBQUUsT0FBTyxFQUNoQixPQUFPLEVBQUUsT0FBTyxFQUNoQixhQUFhLEVBQUUsYUFBYSxFQUM1QixJQUFJLEVB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