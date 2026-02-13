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
    var { items, value, onChange, className = "mb-4", label, name, wrapper } = _a, attr = __rest(_a, ["items", "value", "onChange", "className", "label", "name", "wrapper"]);
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
    const checkBoxes = items.map((item, key) => (_jsx(Checkbox, { value: csv.has(strValue, item.value), onChange: (_, checked) => onChangeCheckbox(item.value, checked), children: item.label }, key)));
    return (_jsxs("div", { className: concat(className, "input-container"), children: [!!label && _jsx("label", { htmlFor: id, children: label }), !!wrapper ? wrapper(checkBoxes) : checkBoxes, !!name && (_jsx("input", Object.assign({}, attr, { id: id, hidden: true, name: name, value: strValue, onChange: fnVoid })))] }));
}
function getStrValue(value) {
    return value.length === 0 ? "" : value.join(",");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9zZWxlY3QtY2hlY2tib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNuRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBVSxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxRQUFRLE1BQU0sa0JBQWtCLENBQUM7QUFleEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUE0RjtRQUE1RixFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsR0FBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLE9BQTJCLEVBQXRCLElBQUksY0FBMUUsdUVBQTJFLENBQUQ7SUFDbEcsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsTUFBTSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFFbkIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLFFBQVEsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQVksRUFBRSxPQUFnQixFQUFFLEVBQUU7UUFDM0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQyxDQUFDO0lBRUYsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQzNDLEtBQUMsUUFBUSxJQUVSLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ3BDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFlBQzlELElBQUksQ0FBQyxLQUFLLElBSE4sR0FBRyxDQUlFLENBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsYUFDbEQsQ0FBQyxDQUFDLEtBQUssSUFBSSxnQkFBTyxPQUFPLEVBQUUsRUFBRSxZQUFHLEtBQUssR0FBUyxFQUU5QyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFFNUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUNWLGdDQUNLLElBQUksSUFDUixFQUFFLEVBQUUsRUFBRSxFQUNOLE1BQU0sUUFDTixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxRQUFRLEVBQ2YsUUFBUSxFQUFFLE1BQU0sSUFDZixDQUNGLElBQ0ksQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQWU7SUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELENBQUMifQ==