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
import { concat, fnVoid } from "nextjs-tools";
import Checkbox from "../elem/checkbox/index.js";
export default function (_a) {
    var { name, value, onChange, children, label, className = "" } = _a, attr = __rest(_a, ["name", "value", "onChange", "children", "label", "className"]);
    const id = useId();
    return (_jsxs("div", { className: concat("input-container", className), children: [label && _jsx("label", { htmlFor: id, children: label }), _jsx(Checkbox, { value: value, onChange: onChange, children: children }), name && (_jsx("input", Object.assign({}, attr, { hidden: true, id: id, name: name, value: value ? "true" : "false", onChange: fnVoid })))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9jaGVja2JveC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBQ2IsT0FBYyxFQUFZLEtBQUssRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQVF4QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQWtGO1FBQWxGLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxPQUEyQixFQUF0QixJQUFJLGNBQWhFLCtEQUFpRSxDQUFEO0lBQ3hGLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBRW5CLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLGFBQ2xELEtBQUssSUFBSSxnQkFBTyxPQUFPLEVBQUUsRUFBRSxZQUFHLEtBQUssR0FBUyxFQUU3QyxLQUFDLFFBQVEsSUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLFlBQ2pCLFFBQVEsR0FDQyxFQUVWLElBQUksSUFBSSxDQUNSLGdDQUNLLElBQUksSUFDUixNQUFNLFFBQ04sRUFBRSxFQUFFLEVBQUUsRUFDTixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUMvQixRQUFRLEVBQUUsTUFBTSxJQUNmLENBQ0YsSUFDSSxDQUNOLENBQUM7QUFDSCxDQUFDIn0=