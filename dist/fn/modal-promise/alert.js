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
import create from "./index.js";
import AlertComp from "../modal/alert-comp.js";
export default function (children, _a = {}) {
    var { header, buttonText } = _a, opts = __rest(_a, ["header", "buttonText"]);
    return create((onClose) => (_jsx(AlertComp, { onClose: () => onClose(true), header: header, buttonText: buttonText, children: children })), opts);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwtcHJvbWlzZS9hbGVydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBRzdCLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBTzVDLE1BQU0sQ0FBQyxPQUFPLFdBQ2IsUUFBbUIsRUFDbkIsS0FBOEQsRUFBRTtRQUFoRSxFQUFDLE1BQU0sRUFBRSxVQUFVLE9BQTZDLEVBQXhDLElBQUksY0FBNUIsd0JBQTZCLENBQUQ7SUFFNUIsT0FBTyxNQUFNLENBQ1osQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQ1osS0FBQyxTQUFTLElBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDNUIsTUFBTSxFQUFFLE1BQU0sRUFDZCxVQUFVLEVBQUUsVUFBVSxZQUNyQixRQUFRLEdBQ0UsQ0FDWixFQUNELElBQUksQ0FDSixDQUFDO0FBQ0gsQ0FBQyJ9