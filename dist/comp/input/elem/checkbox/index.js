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
import { concat } from "nextjs-tools";
import cls from "../../../../fn/class-names/index.js";
import Image from "next/image";
import ImgCheck from "web-asset/svg/regular/fi-rr-check.svg";
export default function (_a) {
    var { value, children, onChange } = _a, attr = __rest(_a, ["value", "children", "onChange"]);
    return (_jsxs("button", Object.assign({}, attr, { type: "button", className: concat(cls.height.input, "flex items-center no-drag"), onClick: (e) => onChange(e, !value), children: [_jsx("div", { className: concat("border-(--border) border w-[1.2rem] h-[1.2rem] rounded-sm flex items-center justify-center overflow-hidden", value ? "border-(--primary) bg-(--primary)" : ""), children: _jsx(Image, { className: concat("w-[0.7rem]", value ? "" : "hidden"), src: ImgCheck, alt: "check", width: 18, height: 18 }) }), _jsx("div", { className: concat("pl-2 text-sm", value ? "" : " text-(--info)"), children: children })] })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9lbGVtL2NoZWNrYm94L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFFYixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLFFBQVEsTUFBTSx1Q0FBdUMsQ0FBQztBQU83RCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQXFEO1FBQXJELEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLE9BQTJCLEVBQXRCLElBQUksY0FBbkMsaUNBQW9DLENBQUQ7SUFDM0QsT0FBTyxDQUNOLGtDQUNLLElBQUksSUFDUixJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsMkJBQTJCLENBQUMsRUFDaEUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQ25DLGNBQ0MsU0FBUyxFQUFFLE1BQU0sQ0FDaEIsNEdBQTRHLEVBRTVHLEtBQUssQ0FBQyxDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDaEQsWUFDRCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQ3RELEdBQUcsRUFBRSxRQUFRLEVBQ2IsR0FBRyxFQUFDLE9BQU8sRUFDWCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsR0FDRyxFQUNOLGNBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQUcsUUFBUSxHQUFPLEtBQy9FLENBQ1QsQ0FBQztBQUNILENBQUMifQ==