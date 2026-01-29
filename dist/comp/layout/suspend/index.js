"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { concat } from "nextjs-tools";
import { createPortal } from "react-dom";
import cls from "../../../fn/class-names/index.js";
import ImgLogo from "../../../../asset/png/forest-theme.png";
import Image from "next/image";
export default function ({ children = _jsx(Children, {}), pending, wait = 0.2 }) {
    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        setInit(true);
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);
    useEffect(() => {
        if (wait === 0) {
            setShow(true);
            return;
        }
        setTimeout(() => {
            setShow(true);
        }, wait * 1000);
    }, []);
    if (!pending)
        return null;
    if (!init)
        return null;
    return createPortal(_jsx("div", { className: concat("fixed w-full h-full top-0 left-0", "flex items-center justify-center", cls.transition.default, cls.zIndex.modal, show ? "backdrop-blur-xs bg-(--suspend) opacity-100" : "opacity-0"), children: children }), document.body);
}
function Children() {
    return (_jsxs("div", { className: "flex flex-col items-center no-drag", children: [_jsx(Image, { className: "brightness-50 mb-2 breathing-effect", src: ImgLogo, alt: "logo", width: 40, height: 40 }), _jsx("div", { className: "text-xl font-bold text-(--primary) brightness-50 ", children: "Loading" })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvc3VzcGVuZC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzVELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQztBQUMxQyxPQUFPLE9BQU8sTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RCxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFTL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsR0FBRyxLQUFDLFFBQVEsS0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFrQjtJQUN2RixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZCxPQUFPLEdBQUcsRUFBRTtZQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLE9BQU87UUFDUixDQUFDO1FBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPLElBQUksQ0FBQztJQUMxQixJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXZCLE9BQU8sWUFBWSxDQUNsQixjQUNDLFNBQVMsRUFBRSxNQUFNLENBQ2hCLGtDQUFrQyxFQUNsQyxrQ0FBa0MsRUFDbEMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ2xFLFlBQ0EsUUFBUSxHQUNKLEVBQ04sUUFBUSxDQUFDLElBQUksQ0FDYixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsUUFBUTtJQUNoQixPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUMsb0NBQW9DLGFBQ2xELEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxxQ0FBcUMsRUFDL0MsR0FBRyxFQUFFLE9BQU8sRUFDWixHQUFHLEVBQUMsTUFBTSxFQUNWLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsR0FDVCxFQUNGLGNBQUssU0FBUyxFQUFDLG1EQUFtRCx3QkFBYyxJQUMzRSxDQUNOLENBQUM7QUFDSCxDQUFDIn0=