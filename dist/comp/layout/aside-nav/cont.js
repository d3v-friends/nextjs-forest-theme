"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import cls from "../../../fn/class-names/index.js";
import { toStringBoolean } from "../../../types.js";
import { setAsideStatus } from "./config.js";
import { concat } from "nextjs-tools";
import AsidePC from "./aside-pc.js";
import AsideMobile from "./aside-mobile.js";
const AsideStyle = {
    true: "w-1/5",
    false: "w-[96px]",
};
const ContentStyle = {
    true: "w-full lg:w-4/5",
    false: "w-full lg:w-[calc(100%-96px)]",
};
const AsideMobileStyle = {
    true: "block",
    false: "hidden",
};
export default function ({ aside = [], children, initStatus, header, }) {
    const [isOpen, setIsOpen] = useState(initStatus === "true");
    useEffect(() => {
        setAsideStatus(toStringBoolean(isOpen)).catch((e) => console.error(e));
    }, [isOpen]);
    return (_jsxs("div", { className: concat("flex", cls.transition.shortAll), children: [_jsx("div", { className: concat(AsideStyle[toStringBoolean(isOpen)], "hidden lg:block overflow-hidden"), children: _jsx(AsidePC, { isOpen: isOpen, onChangeIsOpen: setIsOpen, aside: aside, header: header }) }), _jsx("div", { className: "lg:hidden", children: _jsx(AsideMobile, { aside: aside }) }), _jsx("div", { className: concat("lg:pl-8", ContentStyle[toStringBoolean(isOpen)]), children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wL2xheW91dC9hc2lkZS1uYXYvY29udC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sR0FBRyxNQUFNLHlCQUF5QixDQUFDO0FBQzFDLE9BQU8sRUFBZ0IsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQztBQUNqQyxPQUFPLFdBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQVF6QyxNQUFNLFVBQVUsR0FBa0M7SUFDakQsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUUsVUFBVTtDQUNqQixDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQWtDO0lBQ25ELElBQUksRUFBRSxpQkFBaUI7SUFDdkIsS0FBSyxFQUFFLCtCQUErQjtDQUN0QyxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBa0M7SUFDdkQsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUUsUUFBUTtDQUNmLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQ1YsUUFBUSxFQUNSLFVBQVUsRUFDVixNQUFNLEdBQ2tEO0lBQ3hELE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQztJQUU1RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFYixPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUN0RCxjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLGlDQUFpQyxDQUFDLFlBQzdGLEtBQUMsT0FBTyxJQUNQLE1BQU0sRUFBRSxNQUFNLEVBQ2QsY0FBYyxFQUFFLFNBQVMsRUFDekIsS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxHQUNiLEdBQ0csRUFDTixjQUFLLFNBQVMsRUFBQyxXQUFXLFlBQ3pCLEtBQUMsV0FBVyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksR0FDeEIsRUFDTixjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUNyRixDQUNOLENBQUM7QUFDSCxDQUFDIn0=