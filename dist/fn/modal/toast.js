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
import { useEffect, useRef, useState } from "react";
import { concat } from "nextjs-tools";
import { createRoot } from "react-dom/client";
import { cls } from "../index.js";
import Image from "next/image";
import ImgClose from "web-asset/svg/regular/fi-rr-cross-circle.svg";
const TOAST_ID = "forest-toast";
export default function (children, _a = {}) {
    var { topOffset = "80px" } = _a, opts = __rest(_a, ["topOffset"]);
    const base = document.getElementById(TOAST_ID) || document.createElement("div");
    base.id = TOAST_ID;
    base.style.zIndex = "var(--z-toast)";
    base.style.position = "fixed";
    base.style.left = "0px";
    base.style.top = topOffset;
    base.style.width = "100%";
    document.body.appendChild(base);
    const cont = document.createElement("div");
    cont.style.transition = "var(--transition-150)";
    base.appendChild(cont);
    const root = createRoot(cont);
    const onClose = () => {
        root.unmount();
        cont.remove();
        if (base.children.length === 0) {
            base.remove();
        }
    };
    const target = typeof children === "function" ? children(onClose) : children;
    root.render(_jsx(Toast, Object.assign({ onClose: onClose }, opts, { children: target })));
}
const BgStyle = {
    primary: "bg-(--primary)/60",
    success: "bg-(--success)/60",
    info: "bg-(--info)/60",
    warning: "bg-(--warning)/60",
    danger: "bg-(--danger)/60",
};
function Toast({ children, onClose, maxWidth = 1440, color = "primary", autoClose = true, timeout = 10000, }) {
    const [isInit, setIsInit] = useState(false);
    const onHideAndClose = () => {
        setIsInit(false);
        setTimeout(() => {
            onClose();
        }, 250);
    };
    const onCloseRef = useRef(onHideAndClose);
    useEffect(() => {
        setIsInit(true);
        if (!autoClose)
            return;
        setTimeout(() => {
            onCloseRef.current();
        }, timeout);
    }, []);
    return (_jsxs("div", { className: concat(cls.transition.short, "ml-auto mr-auto mb-3", "rounded-lg shadow-xl backdrop-blur-md", "pt-3 pb-3 pl-5 pr-5", "flex items-start", isInit ? "opacity-100" : "opacity-0", BgStyle[color]), style: { maxWidth }, children: [_jsx("div", { children: children }), _jsx("div", { className: "grow" }), _jsx("button", { autoFocus: true, className: "flex items-center group", onClick: onHideAndClose, children: _jsx(Image, { className: concat("filter-(--info-filter) group-hover:filter-none"), src: ImgClose, alt: "close", width: 20, height: 20 }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvdG9hc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQUNiLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUU3RCxPQUFPLEVBQUMsTUFBTSxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLFFBQVEsTUFBTSw4Q0FBOEMsQ0FBQztBQVlwRSxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUM7QUFFaEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxRQUE2QixFQUFFLEtBQXVELEVBQUU7UUFBekQsRUFBQyxTQUFTLEdBQUcsTUFBTSxPQUFzQyxFQUFqQyxJQUFJLGNBQTVCLGFBQTZCLENBQUQ7SUFDbkYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUMxQixRQUFR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