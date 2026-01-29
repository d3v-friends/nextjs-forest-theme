"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { toStringBoolean } from "../../../types.js";
import Link from "next/link";
import Image from "next/image";
import ImgLeft from "web-asset/svg/regular/fi-rr-angle-small-left.svg";
import ImgRight from "web-asset/svg/regular/fi-rr-angle-small-right.svg";
import cls from "../../../fn/class-names/index.js";
function Cont({ children, activated = false, disabled = false }) {
    const disabledStyle = {
        true: "cursor-not-allowed",
        false: "",
    };
    const activatedStyle = {
        true: "bg-(--primary) text-white",
        false: "group-hover:border-(--primary) text-(--info)",
    };
    return (_jsx("div", { className: concat("group w-8 mr-1 ml-1 no-drag", cls.height.input), children: _jsx("div", { className: concat("h-full flex items-center justify-center", "group border border-transparent rounded", disabledStyle[toStringBoolean(disabled)], activatedStyle[toStringBoolean(activated)]), children: children }) }));
}
function LinkButton({ href, children, activated }) {
    if (!href)
        return _jsx(Cont, { disabled: true, children: children });
    return (_jsx(Link, { href: href, children: _jsx(Cont, { activated: activated, children: children }) }));
}
function Prev({ activated, href }) {
    if (!activated)
        return null;
    return (_jsx(LinkButton, { href: href, children: _jsx(Image, { className: concat("filter-(--info-filter) group-hover:filter-(--primary-filter)"), src: ImgLeft, alt: "goto first", width: 25, height: 25 }) }));
}
function Next({ href, activated }) {
    if (!activated)
        return null;
    return (_jsx(LinkButton, { href: href, children: _jsx(Image, { className: concat("filter-(--info-filter) group-hover:filter-(--primary-filter)"), src: ImgRight, alt: "goto first", width: 25, height: 25 }) }));
}
export default { LinkButton, Prev, Next };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9wYWdpbmF0aW9uL2l0ZW1zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQWUsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxrREFBa0QsQ0FBQztBQUN2RSxPQUFPLFFBQVEsTUFBTSxtREFBbUQsQ0FBQztBQUN6RSxPQUFPLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQztBQVExQyxTQUFTLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQXFCO0lBQ2hGLE1BQU0sYUFBYSxHQUFpQjtRQUNuQyxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1QsQ0FBQztJQUVGLE1BQU0sY0FBYyxHQUFpQjtRQUNwQyxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDLEtBQUssRUFBRSw4Q0FBOEM7S0FDckQsQ0FBQztJQUVGLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFDdEUsY0FDQyxTQUFTLEVBQUUsTUFBTSxDQUNoQix5Q0FBeUMsRUFDekMseUNBQXlDLEVBQ3pDLGFBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDeEMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUMxQyxZQUNBLFFBQVEsR0FDSixHQUNELENBQ04sQ0FBQztBQUNILENBQUM7QUFRRCxTQUFTLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUEyQjtJQUN4RSxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sS0FBQyxJQUFJLElBQUMsUUFBUSxrQkFBRSxRQUFRLEdBQVEsQ0FBQztJQUVuRCxPQUFPLENBQ04sS0FBQyxJQUFJLElBQUMsSUFBSSxFQUFFLElBQUksWUFDZixLQUFDLElBQUksSUFBQyxTQUFTLEVBQUUsU0FBUyxZQUFHLFFBQVEsR0FBUSxHQUN2QyxDQUNQLENBQUM7QUFDSCxDQUFDO0FBT0QsU0FBUyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFxQjtJQUNsRCxJQUFJLENBQUMsU0FBUztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTVCLE9BQU8sQ0FDTixLQUFDLFVBQVUsSUFBQyxJQUFJLEVBQUUsSUFBSSxZQUNyQixLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLDhEQUE4RCxDQUFDLEVBQ2pGLEdBQUcsRUFBRSxPQUFPLEVBQ1osR0FBRyxFQUFDLFlBQVksRUFDaEIsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULEdBQ1UsQ0FDYixDQUFDO0FBQ0gsQ0FBQztBQU9ELFNBQVMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBcUI7SUFDbEQsSUFBSSxDQUFDLFNBQVM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUU1QixPQUFPLENBQ04sS0FBQyxVQUFVLElBQUMsSUFBSSxFQUFFLElBQUksWUFDckIsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLE1BQU0sQ0FBQyw4REFBOEQsQ0FBQyxFQUNqRixHQUFHLEVBQUUsUUFBUSxFQUNiLEdBQUcsRUFBQyxZQUFZLEVBQ2hCLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxHQUNVLENBQ2IsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyJ9