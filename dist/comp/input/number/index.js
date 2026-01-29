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
import { useEffect, useState } from "react";
import InputBase from "../base/index.js";
import { fnVoid } from "nextjs-tools";
export default function (_a) {
    var { value, onChange, onBlur = fnVoid } = _a, attr = __rest(_a, ["value", "onChange", "onBlur"]);
    const [strValue, setStrValue] = useState(value ? value.toString() : "");
    const onBlurEvent = (e) => {
        onBlur(e);
        const next = toNumber(e.target.value);
        onChange(next);
        setStrValue(next ? next.toString() : "");
    };
    useEffect(() => {
        setStrValue(value ? value.toString() : "");
    }, [value]);
    return (_jsx(InputBase, Object.assign({}, attr, { value: strValue, onChange: (str) => setStrValue(str), onBlur: onBlurEvent, type: "number" })));
}
function toNumber(value) {
    if (!value || value.trim() === "")
        return null;
    const converted = Number(value);
    return isNaN(converted) || !isFinite(converted) ? null : converted;
}
function getInterceptor(numberType) {
    switch (numberType) {
        case "decimal":
            return Decimal;
        default:
            return Integer;
    }
}
function Integer(e) {
    const val = e.target.value;
    return val.replace(/(?!^-)[^0-9]/g, "");
}
function Decimal(e) {
    let val = e.target.value;
    val = val.replace(/[^0-9.-]/g, "");
    if (val.startsWith("-")) {
        val = "-" + val.slice(1).replace(/-/g, "");
    }
    else {
        val = val.replace(/-/g, "");
    }
    const parts = val.split(".");
    if (parts.length > 2) {
        val = parts[0] + "." + parts.slice(1).join("");
    }
    return val;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9udW1iZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBb0IsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNwRSxPQUFPLFNBQStCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBUyxNQUFNLEVBQVcsTUFBTSxjQUFjLENBQUM7QUFZdEQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUE0RDtRQUE1RCxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLE1BQU0sT0FBMkIsRUFBdEIsSUFBSSxjQUExQywrQkFBMkMsQ0FBRDtJQUNsRSxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFeEUsTUFBTSxXQUFXLEdBQXdDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDOUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosT0FBTyxDQUNOLEtBQUMsU0FBUyxvQkFDTCxJQUFJLElBQ1IsS0FBSyxFQUFFLFFBQVEsRUFDZixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFDbkMsTUFBTSxFQUFFLFdBQVcsRUFDbkIsSUFBSSxFQUFDLFFBQVEsSUFDWixDQUNGLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBYTtJQUM5QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDL0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNwRSxDQUFDO0FBSUQsU0FBUyxjQUFjLENBQUMsVUFBc0I7SUFDN0MsUUFBUSxVQUFVLEVBQUUsQ0FBQztRQUNwQixLQUFLLFNBQVM7WUFDYixPQUFPLE9BQU8sQ0FBQztRQUNoQjtZQUNDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7QUFDRixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsQ0FBc0M7SUFDdEQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFM0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsQ0FBc0M7SUFDdEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFHekIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBR25DLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3pCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7U0FBTSxDQUFDO1FBQ1AsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN0QixHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDIn0=