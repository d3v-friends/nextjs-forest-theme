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
        onChange(strValue === "" ? [] : strValue.split(",").map((item) => item.trim()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9zZWxlY3QtY2hlY2tib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNuRSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBVSxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxRQUFRLE1BQU0sa0JBQWtCLENBQUM7QUFrQnhDLE1BQU0sQ0FBQyxPQUFPLFdBQTZCLEVBU3RCO1FBVHNCLEVBQzFDLEtBQUssRUFDTCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FBRyxNQUFNLEVBQ2xCLEtBQUssRUFDTCxJQUFJLEVBQ0osT0FBTyxPQUVhLEVBRGpCLElBQUksY0FSbUMsdUVBUzFDLENBRE87SUFFUCxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUVuQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVmLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO1FBQzNELE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUMsQ0FBQztJQUVGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUMzQyxLQUFDLFFBQVEsSUFFUixLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNwQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxZQUM5RCxJQUFJLENBQUMsS0FBSyxJQUhOLEdBQUcsQ0FJRSxDQUNYLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLGFBQ2xELENBQUMsQ0FBQyxLQUFLLElBQUksZ0JBQU8sT0FBTyxFQUFFLEVBQUUsWUFBRyxLQUFLLEdBQVMsRUFFOUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBRTVDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FDVixnQ0FDSyxJQUFJLElBQ1IsRUFBRSxFQUFFLEVBQUUsRUFDTixNQUFNLFFBQ04sSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsUUFBUSxFQUNmLFFBQVEsRUFBRSxNQUFNLElBQ2YsQ0FDRixJQUNJLENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFlO0lBQ25DLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRCxDQUFDIn0=