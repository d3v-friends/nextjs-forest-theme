"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Decimal from "decimal.js";
import { concat } from "nextjs-tools";
import cls from "../../../fn/class-names/index.js";
import strconv from "../../../fn/strconv/index.js";
export default function ({ max, value, className = "mb-4", color = "primary", detail = false }) {
    const width = new Decimal(value).div(max).mul(100).ceil().toNumber();
    return (_jsx("div", { className: className, children: _jsxs("div", { className: "flex items-center", children: [_jsx(Bar, { value: value, color: color, max: max }), detail && (_jsxs("div", { className: "text-sm w-1/6 text-right", children: [strconv.toSplitNumber(value), " /", _jsx("span", { className: "text-(--info)", children: strconv.toSplitNumber(max) })] }))] }) }));
}
const Style = {
    primary: "bg-(--primary) text-(--primary-alt)",
    info: "bg-(--info) text-(--info-alt)",
    success: "bg-(--success) text-(--success-alt)",
    warning: "bg-(--warning) text-(--warning-alt)",
    danger: "bg-(--danger) text-(--danger-alt)",
};
function Bar({ value, max, color }) {
    const width = new Decimal(value).div(max).mul(100).ceil().toNumber();
    return (_jsx("div", { className: concat("bg-(--border) rounded-lg overflow-hidden h-5 grow"), children: _jsxs("div", { className: concat(cls.transition.default, Style[color], "text-xs font-bold overflow-hidden h-full flex items-center justify-center"), style: { width: `${width}%` }, children: [width, "%"] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvcHJvZ3Jlc3MtYmFyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxHQUFHLE1BQU0seUJBQXlCLENBQUM7QUFFMUMsT0FBTyxPQUFPLE1BQU0saUJBQWlCLENBQUM7QUFVdEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFHLE1BQU0sRUFBRSxLQUFLLEdBQUcsU0FBUyxFQUFFLE1BQU0sR0FBRyxLQUFLLEVBQWtCO0lBQzVHLE1BQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFckUsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLFNBQVMsWUFDeEIsZUFBSyxTQUFTLEVBQUMsbUJBQW1CLGFBQ2pDLEtBQUMsR0FBRyxJQUNILEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixHQUFHLEVBQUUsR0FBRyxHQUNQLEVBQ0QsTUFBTSxJQUFJLENBQ1YsZUFBSyxTQUFTLEVBQUMsMEJBQTBCLGFBQ3ZDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQzdCLGVBQU0sU0FBUyxFQUFDLGVBQWUsWUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFRLElBQzlELENBQ04sSUFDSSxHQUNELENBQ04sQ0FBQztBQUNILENBQUM7QUFDRCxNQUFNLEtBQUssR0FBMEI7SUFDcEMsT0FBTyxFQUFFLHFDQUFxQztJQUM5QyxJQUFJLEVBQUUsK0JBQStCO0lBQ3JDLE9BQU8sRUFBRSxxQ0FBcUM7SUFDOUMsT0FBTyxFQUFFLHFDQUFxQztJQUM5QyxNQUFNLEVBQUUsbUNBQW1DO0NBQzNDLENBQUM7QUFRRixTQUFTLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFxQjtJQUNuRCxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JFLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsbURBQW1ELENBQUMsWUFDMUUsZUFDQyxTQUFTLEVBQUUsTUFBTSxDQUNoQixHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNaLDJFQUEyRSxDQUMzRSxFQUNELEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFDLGFBQzFCLEtBQUssU0FDRCxHQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==