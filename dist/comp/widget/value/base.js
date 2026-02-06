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
import Image from "next/image";
import { concat } from "nextjs-tools";
import { cls } from "../../../index.js";
export default function (_a) {
    var { children, icon, iconColor = "primary", copyable = false, text = "" } = _a, opts = __rest(_a, ["children", "icon", "iconColor", "copyable", "text"]);
    return (_jsx("span", Object.assign({}, opts, { children: _jsxs("div", { className: "text-(--info) flex inline-flex items-center", suppressHydrationWarning: true, children: [icon && (_jsx(Image, { className: concat("mr-1 w-4", cls.filter[iconColor]), src: icon, alt: "icon", width: 20, height: 20 })), copyable ? _jsx(Children, { text: text, children: children }) : children] }) })));
}
function Children({ children, text }) {
    const onCopy = () => {
        window.navigator.clipboard.writeText(text).catch((e) => console.error(e));
    };
    return (_jsx("button", { className: "hover:underline", type: "button", onClick: onCopy, suppressHydrationWarning: true, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wL3dpZGdldC92YWx1ZS9iYXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFFYixPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBRWxELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQVM3QixNQUFNLENBQUMsT0FBTyxXQUFXLEVBT1A7UUFQTyxFQUN4QixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FBRyxTQUFTLEVBQ3JCLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLElBQUksR0FBRyxFQUFFLE9BRVEsRUFEZCxJQUFJLGNBTmlCLHFEQU94QixDQURPO0lBRVAsT0FBTyxDQUNOLCtCQUFVLElBQUksY0FDYixlQUNDLFNBQVMsRUFBQyw2Q0FBNkMsRUFDdkQsd0JBQXdCLG1CQUN2QixJQUFJLElBQUksQ0FDUixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3BELEdBQUcsRUFBRSxJQUFJLEVBQ1QsR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsQ0FDRixFQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBQyxRQUFRLElBQUMsSUFBSSxFQUFFLElBQUksWUFBRyxRQUFRLEdBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUM3RCxJQUNBLENBQ1AsQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQTBCO0lBQzFELE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNuQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGlCQUNDLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsSUFBSSxFQUFDLFFBQVEsRUFDYixPQUFPLEVBQUUsTUFBTSxFQUNmLHdCQUF3QixrQkFDdkIsUUFBUSxHQUNELENBQ1QsQ0FBQztBQUNILENBQUMifQ==