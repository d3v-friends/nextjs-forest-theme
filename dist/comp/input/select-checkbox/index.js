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
import { useEffect, useId, useState } from "react";
import { concat, csv, fnVoid } from "nextjs-tools";
import Checkbox from "../elem/checkbox/index.js";
export default function (_a) {
    var { items, value, onChange, className = "mb-4", label, name } = _a, attr = __rest(_a, ["items", "value", "onChange", "className", "label", "name"]);
    const [strValue, setStrValue] = useState(getStrValue(value));
    const id = useId();
    useEffect(() => {
        setStrValue(getStrValue(value));
    }, [value]);
    useEffect(() => {
        onChange(strValue === "" ? [] : csv.split(strValue));
    }, [strValue]);
    const onChangeCheckbox = (item, checked) => {
        checked ? setStrValue(csv.push(strValue, item)) : setStrValue(csv.pop(strValue, item));
    };
    return (_jsxs("div", { className: concat(className, "input-container"), children: [!!label && _jsx("label", { htmlFor: id, children: label }), items.map((item, key) => (_jsx(Checkbox, { value: csv.has(strValue, item.value), onChange: (_, checked) => onChangeCheckbox(item.value, checked), children: item.label }, key))), !!name && (_jsx("input", Object.assign({}, attr, { id: id, hidden: true, name: name, value: strValue, onChange: fnVoid })))] }));
}
function getStrValue(value) {
    return value.length === 0 ? "" : value.join(",");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9zZWxlY3QtY2hlY2tib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNuRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBVSxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxRQUFRLE1BQU0sa0JBQWtCLENBQUM7QUFjeEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFtRjtRQUFuRixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsR0FBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksT0FBMkIsRUFBdEIsSUFBSSxjQUFqRSw0REFBa0UsQ0FBRDtJQUN6RixNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUVuQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFZixNQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBWSxFQUFFLE9BQWdCLEVBQUUsRUFBRTtRQUMzRCxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxhQUNsRCxDQUFDLENBQUMsS0FBSyxJQUFJLGdCQUFPLE9BQU8sRUFBRSxFQUFFLFlBQUcsS0FBSyxHQUFTLEVBRTlDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN6QixLQUFDLFFBQVEsSUFFUixLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNwQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxZQUM5RCxJQUFJLENBQUMsS0FBSyxJQUhOLEdBQUcsQ0FJRSxDQUNYLENBQUMsRUFFRCxDQUFDLENBQUMsSUFBSSxJQUFJLENBQ1YsZ0NBQ0ssSUFBSSxJQUNSLEVBQUUsRUFBRSxFQUFFLEVBQ04sTUFBTSxRQUNOLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLFFBQVEsRUFDZixRQUFRLEVBQUUsTUFBTSxJQUNmLENBQ0YsSUFDSSxDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBZTtJQUNuQyxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEQsQ0FBQyJ9