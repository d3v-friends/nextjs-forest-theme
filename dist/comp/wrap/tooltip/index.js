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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { concat, initCoordinate, initPosition } from "nextjs-tools";
export default function (_a) {
    var { onMouseEnter, onMouseLeave, tooltip, direction } = _a, opts = __rest(_a, ["onMouseEnter", "onMouseLeave", "tooltip", "direction"]);
    const divRef = useRef(null);
    const [position, onChangePosition] = useState(initPosition);
    const [show, onChangeShow] = useState(false);
    const onChangeRect = () => {
        if (!divRef.current)
            return;
        const { top, left, width, height } = divRef.current.getBoundingClientRect();
        onChangePosition({ left, width, height, top: top + window.scrollY });
    };
    return (_jsxs(_Fragment, { children: [_jsx("span", Object.assign({}, opts, { ref: divRef, onMouseEnter: (e) => {
                    onMouseEnter ? onMouseEnter(e) : "";
                    onChangeShow(true);
                    onChangeRect();
                }, onMouseLeave: (e) => {
                    onMouseLeave ? onMouseLeave(e) : "";
                    onChangeShow(false);
                } })), show && (_jsx(Tooltip, { onChangeShow: onChangeShow, parent: position, direction: direction, children: tooltip }))] }));
}
function Tooltip({ parent, children, onChangeShow, direction = "bottom" }) {
    const divRef = useRef(null);
    const [init, onChangeInit] = useState(false);
    const [pos, onChangePos] = useState(initCoordinate);
    useLayoutEffect(() => {
        if (!divRef.current)
            return;
        const child = divRef.current.getBoundingClientRect();
        const left = Math.floor(parent.left + (parent.width - child.width) / 2);
        const top = Math.floor(parent.top + (parent.height - child.height) / 2);
        const space = 10;
        let next = { top: 0, left: 0 };
        switch (direction) {
            case "left":
                next = { top: top, left: parent.left - child.width - space };
                break;
            case "right":
                next = { top: top, left: parent.left + parent.width + space };
                break;
            case "bottom":
                next = { top: parent.top + parent.height + space, left: left };
                break;
            case "top":
                next = { top: parent.top - parent.height, left: left };
                break;
        }
        onChangePos(next);
        onChangeInit(true);
    }, []);
    return createPortal(_jsx("div", { ref: divRef, className: concat("absolute border border-(--border) rounded pl-2 pr-2 pt-1 pb-1 bg-white shadow-xl", init ? "opacity-100" : "opacity-0"), style: Object.assign({}, pos), onMouseEnter: () => onChangeShow(true), onMouseLeave: () => onChangeShow(false), children: children }), document.body);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93cmFwL3Rvb2x0aXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBWSxlQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMxRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxNQUFNLEVBQXNCLGNBQWMsRUFBRSxZQUFZLEVBQVcsTUFBTSxjQUFjLENBQUM7QUFRaEcsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFtRjtRQUFuRixFQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsT0FBb0MsRUFBL0IsSUFBSSxjQUF4RCx3REFBeUQsQ0FBRDtJQUNoRixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQWtCLElBQUksQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQVcsWUFBWSxDQUFDLENBQUM7SUFDdEUsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFN0MsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUFFLE9BQU87UUFDNUIsTUFBTSxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMxRSxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFD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