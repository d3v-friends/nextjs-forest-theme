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
import { jsx as _jsx } from "react/jsx-runtime";
import Base from "./base.js";
import ImgId from "web-asset/svg/regular/fi-rr-id-badge.svg";
export default function (_a) {
    var { children } = _a, opts = __rest(_a, ["children"]);
    const label = 6 < children.length ? children.slice(0, 6) + "..." : children;
    return (_jsx(Base, Object.assign({ icon: ImgId, text: children }, opts, { children: label })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JlamN0LWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvd2lkZ2V0L3ZhbHVlL29iZWpjdC1pZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBSWIsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBQzFCLE9BQU8sS0FBSyxNQUFNLDBDQUEwQyxDQUFDO0FBUzdELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBb0M7UUFBcEMsRUFBQyxRQUFRLE9BQTJCLEVBQXRCLElBQUksY0FBbEIsWUFBbUIsQ0FBRDtJQUMxQyxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFNUUsT0FBTyxDQUNOLEtBQUMsSUFBSSxrQkFDSixJQUFJLEVBQUUsS0FBSyxFQUNYLElBQUksRUFBRSxRQUFRLElBQ1YsSUFBSSxjQUNQLEtBQUssSUFDQSxDQUNQLENBQUM7QUFDSCxDQUFDIn0=