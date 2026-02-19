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
import { concat } from "nextjs-tools";
export default function (_a) {
    var { children = [], className } = _a, attr = __rest(_a, ["children", "className"]);
    return (_jsx("div", Object.assign({ className: className }, attr, { children: children.map((value, key) => (_jsx("div", { className: concat("rounded-xl p-4", key % 2 === 0 ? "bg-(--table-stripe)" : ""), children: value }, key))) })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9zdHJpcGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFNcEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFvRDtRQUFwRCxFQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsU0FBUyxPQUEyQixFQUF0QixJQUFJLGNBQWxDLHlCQUFtQyxDQUFEO0lBQzFELE9BQU8sQ0FDTiw0QkFDQyxTQUFTLEVBQUUsU0FBUyxJQUNoQixJQUFJLGNBQ1AsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQzdCLGNBRUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUM5RSxLQUFLLElBRkQsR0FBRyxDQUdILENBQ04sQ0FBQyxJQUNHLENBQ04sQ0FBQztBQUNILENBQUMifQ==