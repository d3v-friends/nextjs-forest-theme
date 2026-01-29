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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useId, useState } from "react";
import { fnVoid, initCoordinate } from "nextjs-tools";
import { DateTime } from "luxon";
import { useDropdown } from "../../../hook/index.js";
import Calendar from "../elem/calendar/index.js";
export default function (_a) {
    var { value, onChange, timezone = "Asia/Seoul", format = "yyyy-MM-dd", label, name, className, empty = "없음", close = "닫기", reset = "초기화" } = _a, attr = __rest(_a, ["value", "onChange", "timezone", "format", "label", "name", "className", "empty", "close", "reset"]);
    const id = useId();
    const [pos, setPos] = useState(initCoordinate);
    const [fromDrop] = useDropdown(({ onClose }) => (_jsx(Dropdown, { value: value.from, onChange: (from) => onChange(Object.assign(Object.assign({}, value), { from })), onClose: onClose, reset: reset, close: close })));
    const [toDrop] = useDropdown(({ onClose }) => (_jsx(Dropdown, { value: value.to, onChange: (to) => onChange(Object.assign(Object.assign({}, value), { to })), onClose: onClose, reset: reset, close: close })));
    useEffect(() => {
        onChange(adjustTime({ value, timezone }));
    }, []);
    const strValue = {
        from: value.from ? DateTime.fromJSDate(value.from).setZone(timezone).toFormat(format) : empty,
        to: value.to ? DateTime.fromJSDate(value.to).setZone(timezone).toFormat(format) : empty,
    };
    return (_jsxs("div", { className: className, children: [label && (_jsx("label", { className: "block", htmlFor: id, children: label })), name && (_jsx("input", Object.assign({}, attr, { hidden: true, id: id, name: name, value: toInputValue(value), onChange: fnVoid }))), _jsxs("div", { className: "grid grid-cols-2 gap-2 lg:gap-4", children: [fromDrop((isOpen) => (_jsx(Date, { children: strValue.from }))), toDrop((isOpen) => (_jsx(Date, { children: strValue.to })))] })] }));
}
function adjustTime({ value, timezone }) {
    const res = {};
    res.to = setTimezone(value.to, timezone);
    res.from = setTimezone(value.from, timezone);
    return res;
}
function setTimezone(value, timezone = "Asia/Seoul") {
    if (!value)
        return undefined;
    return DateTime.fromJSDate(value)
        .setZone(timezone)
        .set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    })
        .toJSDate();
}
function toInputValue(value) {
    let res = "";
    if (value.from) {
        res = value.from.toISOString();
    }
    if (value.to) {
        res = res + `,${value.to.toISOString()}`;
    }
    return res;
}
function Date({ children }) {
    return (_jsx("div", { className: "border-b border-(--border) h-(--elem-height) flex items-center hover:underline", children: children }));
}
function Dropdown({ value, onChange, onClose, reset, close, timezone }) {
    return (_jsxs(_Fragment, { children: [_jsx(Calendar, { className: "pt-4", value: value || null, onChange: (from) => onChange(setTimezone(from, timezone)) }), _jsxs("div", { className: "text-right pt-2", children: [_jsx("button", { className: "lined info mr-2", onClick: () => {
                            onChange(undefined);
                            onClose();
                        }, children: reset }), _jsx("button", { className: "outlined", onClick: onClose, children: close })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9wZXJpb2QvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNuRSxPQUFPLEVBQXlDLE1BQU0sRUFBRSxjQUFjLEVBQXNCLE1BQU0sY0FBYyxDQUFDO0FBQ2pILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQWlCeEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQVlQO1FBWk8sRUFDeEIsS0FBSyxFQUNMLFFBQVEsRUFDUixRQUFRLEdBQUcsWUFBWSxFQUN2QixNQUFNLEdBQUcsWUFBWSxFQUNyQixLQUFLLEVBQ0wsSUFBSSxFQUNKLFNBQVMsRUFDVCxLQUFLLEdBQUcsSUFBSSxFQUNaLEtBQUssR0FBRyxJQUFJLEVBQ1osS0FBSyxHQUFHLEtBQUssT0FFSSxFQURkLElBQUksY0FYaUIsb0dBWXhCLENBRE87SUFFUCxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUNuQixNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBYSxjQUFjLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0MsS0FBQyxRQUFRLElBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2pCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxpQ0FBSyxLQUFLLEtBQUUsSUFBSSxJQUFF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