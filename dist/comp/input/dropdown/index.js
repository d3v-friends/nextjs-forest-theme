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
import { useId } from "react";
import Dropdown from "../elem/dropdown/index.js";
import { concat, fnVoid } from "nextjs-tools";
export default function (_a) {
    var { value, items, onChange, label, className = "mb-4", name } = _a, attr = __rest(_a, ["value", "items", "onChange", "label", "className", "name"]);
    const id = useId();
    return (_jsxs("div", { className: concat("input-container", className), children: [!!label && _jsx("label", { htmlFor: id, children: label }), _jsx(Dropdown, { className: "w-full", items: items, value: value, onChange: onChange }), !!name && (_jsx("input", Object.assign({}, attr, { hidden: true, id: id, name: name, value: value, onChange: fnVoid })))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9kcm9wZG93bi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBQ2IsT0FBYyxFQUFZLEtBQUssRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM5QyxPQUFPLFFBQXdCLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFDLE1BQU0sRUFBVSxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFZcEQsTUFBTSxDQUFDLE9BQU8sV0FBNkIsRUFZdEI7UUFac0IsRUFDMUMsS0FBSyxFQUNMLEtBQUssRUFDTCxRQUFRLEVBR1IsS0FBSyxFQUNMLFNBQVMsR0FBRyxNQUFNLEVBR2xCLElBQUksT0FFZ0IsRUFEakIsSUFBSSxjQVhtQyw0REFZMUMsQ0FETztJQUVQLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBRW5CLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLGFBQ2xELENBQUMsQ0FBQyxLQUFLLElBQUksZ0JBQU8sT0FBTyxFQUFFLEVBQUUsWUFBRyxLQUFLLEdBQVMsRUFFL0MsS0FBQyxRQUFRLElBQ1IsU0FBUyxFQUFDLFFBQVEsRUFDbEIsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLEdBQ2pCLEVBRUQsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUNWLGdDQUNLLElBQUksSUFDUixNQUFNLFFBQ04sRUFBRSxFQUFFLEVBQUUsRUFDTixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLE1BQU0sSUFDZixDQUNGLElBQ0ksQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9