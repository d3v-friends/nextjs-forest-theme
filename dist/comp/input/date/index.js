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
import { useEffect, useId } from "react";
import Calendar from "../elem/calendar/index.js";
import { concat, fnVoid } from "nextjs-tools";
import { DateTime } from "luxon";
import { useDropdown } from "../../../hook/index.js";
export default function (_a) {
    var { value, onChange, label, children, name, format = "yyyy-MM-dd", timezone = "Asia/Seoul", className = "mb-4", close = "닫기", reset = "초기화", empty = "없음" } = _a, attr = __rest(_a, ["value", "onChange", "label", "children", "name", "format", "timezone", "className", "close", "reset", "empty"]);
    const id = useId();
    const strValue = value ? DateTime.fromJSDate(value).setZone(timezone).toFormat(format) : empty;
    const [dropdown] = useDropdown(({ onClose }) => (_jsxs(_Fragment, { children: [_jsx(Calendar, { className: "pt-4 pb-2", value: value, onChange: onChange }), _jsxs("div", { className: "text-right", children: [_jsx("button", { className: "lined info mr-2", onClick: () => {
                            onChange(null);
                            onClose();
                        }, children: reset }), _jsx("button", { className: "outlined", onClick: onClose, children: close })] })] })));
    useEffect(() => {
        if (!value)
            return;
        onChange(DateTime.fromJSDate(value)
            .setZone(timezone)
            .set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
        })
            .toJSDate());
    }, []);
    return (_jsxs("div", { className: className, children: [!!label && _jsx("label", { htmlFor: id, children: label }), !!name && (_jsx("input", Object.assign({}, attr, { hidden: true, id: id, name: name, value: value ? value.toISOString() : "", onChange: fnVoid }))), _jsx("div", { className: "border-b border-(--border)", children: dropdown((isOpen) => (_jsx(_Fragment, { children: _jsx("div", { className: concat("flex hover:underline h-(--elem-height) items-center"), suppressHydrationWarning: true, children: strValue }) }))) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9kYXRlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUN6RCxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLEVBQUMsTUFBTSxFQUFVLE1BQU0sRUFBVyxNQUFNLGNBQWMsQ0FBQztBQUM5RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFpQnRDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFhUDtRQWJPLEVBQ3hCLEtBQUssRUFDTCxRQUFRLEVBQ1IsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxHQUFHLFlBQVksRUFDckIsUUFBUSxHQUFHLFlBQVksRUFDdkIsU0FBUyxHQUFHLE1BQU0sRUFDbEIsS0FBSyxHQUFHLElBQUksRUFDWixLQUFLLEdBQUcsS0FBSyxFQUNiLEtBQUssR0FBRyxJQUFJLE9BRUssRUFEZCxJQUFJLGNBWmlCLGdIQWF4QixDQURPO0lBRVAsTUFBTSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDbkIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0MsOEJBQ0MsS0FBQyxRQUFRLElBQ1IsU0FBUyxFQUFDLFdBQVcsRUFDckIsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxHQUNqQixFQUNGLGVBQUssU0FBUyxFQUFDLFlBQVksYUFDMUIsaUJBQ0MsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFOzRCQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDZixPQUFPLEVBQUUsQ0FBQzt3QkFDWCxDQUFDLFlBQ0EsS0FBSyxHQUNFLEVBQ1QsaUJBQ0MsU0FBUyxFQUFDLFVBQVUsRUFDcEIsT0FBTyxFQUFFLE9BQU8sWUFDZixLQUFLLEdBQ0UsSUFDSixJQUNKLENBQ0gsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNuQixRQUFRLENBQ1AsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDeEIsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUNqQixHQUFHLENBQUM7WUFDSixJQUFJLEVBQUUsQ0FBQztZQUNQLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxXQUFXLEVBQUUsQ0FBQztTQUNkLENBQUM7YUFDRCxRQUFRLEVBQUUsQ0FDWixDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLFNBQVMsYUFDdkIsQ0FBQyxDQUFDLEtBQUssSUFBSSxnQkFBTyxPQUFPLEVBQUUsRUFBRSxZQUFHLEtBQUssR0FBUyxFQUM5QyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQ1YsZ0NBQ0ssSUFBSSxJQUNSLE1BQU0sUUFDTixFQUFFLEVBQUUsRUFBRSxFQUNOLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ3ZDLFFBQVEsRUFBRSxNQUFNLElBQ2YsQ0FDRixFQUVELGNBQUssU0FBUyxFQUFDLDRCQUE0QixZQUN6QyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQ3JCLDRCQUNDLGNBQ0MsU0FBUyxFQUFFLE1BQU0sQ0FBQyxxREFBcUQsQ0FBQyxFQUN4RSx3QkFBd0Isa0JBQ3ZCLFFBQVEsR0FDSixHQUNKLENBQ0gsQ0FBQyxHQUNHLElBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9