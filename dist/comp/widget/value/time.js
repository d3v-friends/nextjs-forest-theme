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
import { DateTime } from "luxon";
import Base from "./base.js";
import ImgClock from "web-asset/svg/regular/fi-rr-clock-nine.svg";
export default function (_a) {
    var { children, timezone = "local", format = "yy.MM.dd (a HH:mm)", locale = "ko" } = _a, opts = __rest(_a, ["children", "timezone", "format", "locale"]);
    const str = children instanceof Date ? children.toISOString() : children;
    const time = DateTime.fromISO(str);
    if (!time.isValid)
        return `${children} is not time`;
    const label = time.setZone(timezone).toFormat(format, { locale });
    return (_jsx(Base, Object.assign({ icon: ImgClock, text: str }, opts, { children: label })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wL3dpZGdldC92YWx1ZS90aW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFFYixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUMxQixPQUFPLFFBQVEsTUFBTSw0Q0FBNEMsQ0FBQztBQVVsRSxNQUFNLENBQUMsT0FBTyxXQUFXLEVBTVA7UUFOTyxFQUN4QixRQUFRLEVBQ1IsUUFBUSxHQUFHLE9BQU8sRUFDbEIsTUFBTSxHQUFHLG9CQUFvQixFQUM3QixNQUFNLEdBQUcsSUFBSSxPQUVJLEVBRGQsSUFBSSxjQUxpQiw0Q0FNeEIsQ0FETztJQUVQLE1BQU0sR0FBRyxHQUFHLFFBQVEsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3pFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxHQUFHLFFBQVEsY0FBYyxDQUFDO0lBRXBELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFFaEUsT0FBTyxDQUNOLEtBQUMsSUFBSSxrQkFDSixJQUFJLEVBQUUsUUFBUSxFQUNkLElBQUksRUFBRSxHQUFHLElBQ0wsSUFBSSxjQUNQLEtBQUssSUFDQSxDQUNQLENBQUM7QUFDSCxDQUFDIn0=