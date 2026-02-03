"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import { cls, ScrollTop } from "../../../index.js";
const Styles = {
    active: "bg-white",
    inactive: "bg-(--nav) backdrop-blur-xs shadow-xl shadow-[rgba(0,0,0,0.08)]",
};
export default function ({ children, className = "" }) {
    const isTop = (scrollTop) => (scrollTop < 100 ? "active" : "inactive");
    return (_jsx(ScrollTop, { children: ({ scrollTop }) => (_jsx("nav", { suppressHydrationWarning: true, className: concat(className, cls.transition.default, Styles[isTop(scrollTop)]), children: children })) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvbGF5b3V0L3RvcC1uYXYvbmF2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsR0FBRyxFQUFZLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQU9sRCxNQUFNLE1BQU0sR0FBNkI7SUFDeEMsTUFBTSxFQUFFLFVBQVU7SUFDbEIsUUFBUSxFQUFFLGlFQUFpRTtDQUMzRSxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFrQjtJQUNuRSxNQUFNLEtBQUssR0FBRyxDQUFDLFNBQWlCLEVBQVksRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RixPQUFPLENBQ04sS0FBQyxTQUFTLGNBQ1IsQ0FBQyxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUNqQixjQUNDLHdCQUF3QixRQUN4QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFDN0UsUUFBUSxHQUNKLENBQ04sR0FDVSxDQUNaLENBQUM7QUFDSCxDQUFDIn0=