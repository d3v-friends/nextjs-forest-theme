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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import strconv from "../../../fn/strconv/index.js";
import Base from "./base.js";
export default function (_a) {
    var { children, thousandSeparator = true, suffix } = _a, opts = __rest(_a, ["children", "thousandSeparator", "suffix"]);
    const label = thousandSeparator ? strconv.toSplitNumber(children) : children;
    return (_jsxs(Base, Object.assign({}, opts, { text: `${children}`, children: [label, suffix && _jsx("span", { className: "ml-1 brightness-180", children: suffix })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3ZhbHVlL251bWJlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBRWIsT0FBTyxPQUFPLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBUzFCLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBc0U7UUFBdEUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEdBQUcsSUFBSSxFQUFFLE1BQU0sT0FBMkIsRUFBdEIsSUFBSSxjQUFwRCwyQ0FBcUQsQ0FBRDtJQUM1RSxNQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQzdFLE9BQU8sQ0FDTixNQUFDLElBQUksb0JBQ0EsSUFBSSxJQUNSLElBQUksRUFBRSxHQUFHLFFBQVEsRUFBRSxhQUNsQixLQUFLLEVBQ0wsTUFBTSxJQUFJLGVBQU0sU0FBUyxFQUFDLHFCQUFxQixZQUFFLE1BQU0sR0FBUSxLQUMxRCxDQUNQLENBQUM7QUFDSCxDQUFDIn0=