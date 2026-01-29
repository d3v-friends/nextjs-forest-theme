"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { concat } from "nextjs-tools";
import { createPortal } from "react-dom";
import { cls } from "../../index.js";
const Style = {
    transparent: "backdrop-blur-xs",
    grayscale: "backdrop-blur-xs backdrop-grayscale-40 bg-[rgba(0,0,0,0.5)]",
};
export default function ({ children, style = "grayscale", isBackdrop = true, onClose }) {
    const [isInit, setIsInit] = useState(false);
    useEffect(() => {
        setIsInit(true);
    }, []);
    if (!children)
        return null;
    if (!isInit)
        return null;
    const styleClassName = Style[style];
    return createPortal(_jsx("div", { className: concat(styleClassName, "fixed w-screen h-screen top-0 left-0", "flex justify-center items-center", cls.zIndex.modal), onClick: () => {
            if (isBackdrop)
                onClose();
        }, children: _jsx("div", { onClick: (e) => e.stopPropagation(), children: children(onClose) }) }), document.body);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob29rL21vZGFsL21vZGFsLWNvbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqRCxPQUFPLEVBQUMsTUFBTSxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQVUxQixNQUFNLEtBQUssR0FBOEI7SUFDeEMsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixTQUFTLEVBQUUsNkRBQTZEO0NBQ3hFLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLEtBQUssR0FBRyxXQUFXLEVBQUUsVUFBVSxHQUFHLElBQUksRUFBRSxPQUFPLEVBQWtCO0lBQ3BHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXpCLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQyxPQUFPLFlBQVksQ0FDbEIsY0FDQyxTQUFTLEVBQUUsTUFBTSxDQUNoQixjQUFjLEVBQ2Qsc0NBQXNDLEVBQ3RDLGtDQUFrQyxFQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDaEIsRUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ2IsSUFBSSxVQUFVO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUMsWUFDRCxjQUFLLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxZQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBTyxHQUM5RCxFQUNOLFFBQVEsQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNILENBQUMifQ==