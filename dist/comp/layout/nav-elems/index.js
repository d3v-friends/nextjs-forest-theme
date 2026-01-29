import { jsx as _jsx } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { cls } from "../../../fn/index.js";
import Link from "next/link";
import MobileMenu from "./menu-mobile.js";
function Container({ children }) {
    return (_jsx("div", { className: concat("w-full h-full transition-all duration-600"), children: _jsx("div", { className: concat("grid grid-cols-3 ml-auto mr-auto h-full", cls.width.max), children: children }) }));
}
function Logo({ children, href = "/", className = "grow", }) {
    return (_jsx("div", { className: concat("flex items-center justify-center", className), children: _jsx(Link, { href: href, className: "raleway font-bold text-2xl", children: children }) }));
}
function Left({ children, className = "" }) {
    return _jsx("div", { className: concat("flex items-center", className), children: children });
}
function Right({ children }) {
    return _jsx("div", { className: "flex items-center justify-end", children: children });
}
function LinkButton({ children, href, className = "", }) {
    return (_jsx(Link, { href: href, className: concat("hover:text-(--primary) hover:brightness-70 text-[0.9rem]", className), children: children }));
}
export default { Container, Logo, Left, Right, LinkButton, MobileMenu };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvbmF2LWVsZW1zL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQztBQUM3QixPQUFPLFVBQVUsTUFBTSxlQUFlLENBQUM7QUFFdkMsU0FBUyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQW1DO0lBQzlELE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsMkNBQTJDLENBQUMsWUFDbEUsY0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLHlDQUF5QyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQUcsUUFBUSxHQUFPLEdBQzdGLENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxFQUNiLFFBQVEsRUFDUixJQUFJLEdBQUcsR0FBRyxFQUNWLFNBQVMsR0FBRyxNQUFNLEdBQ21EO0lBQ3JFLE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsa0NBQWtDLEVBQUUsU0FBUyxDQUFDLFlBQ3BFLEtBQUMsSUFBSSxJQUNKLElBQUksRUFBRSxJQUFJLEVBQ1YsU0FBUyxFQUFDLDRCQUE0QixZQUNyQyxRQUFRLEdBQ0gsR0FDRixDQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBdUQ7SUFDN0YsT0FBTyxjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLFlBQUcsUUFBUSxHQUFPLENBQUM7QUFDakYsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFtQztJQUMxRCxPQUFPLGNBQUssU0FBUyxFQUFDLCtCQUErQixZQUFFLFFBQVEsR0FBTyxDQUFDO0FBQ3hFLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUNuQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FBRyxFQUFFLEdBQ3NEO0lBQ3BFLE9BQU8sQ0FDTixLQUFDLElBQUksSUFDSixJQUFJLEVBQUUsSUFBSSxFQUNWLFNBQVMsRUFBRSxNQUFNLENBQUMsMERBQTBELEVBQUUsU0FBUyxDQUFDLFlBQ3ZGLFFBQVEsR0FDSCxDQUNQLENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFDLENBQUMifQ==