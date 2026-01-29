"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { concat, initPosition } from "nextjs-tools";
export default function (dropdown = () => "", opts = {}) {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState(initPosition);
    const setOpenRef = useRef(setOpen);
    const buttonRef = useRef(null);
    const onClick = (e) => {
        if (!buttonRef.current)
            return;
        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        setPos({ top, left, width, height });
        setOpen(!open);
    };
    useEffect(() => {
        const handler = () => {
            setOpenRef.current(false);
        };
        window.addEventListener("resize", handler);
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("resize", handler);
            window.removeEventListener("scroll", handler);
        };
    }, []);
    const { className } = opts;
    return [
        (children) => (_jsxs(_Fragment, { children: [_jsx("button", { className: concat(className || "", "no-drag"), type: "button", ref: buttonRef, onClick: onClick, children: children(open) }), open &&
                    createPortal(_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full", onClick: (e) => {
                                    e.stopPropagation();
                                    setOpen(false);
                                } }), _jsx(Dropdown, { parent: pos, children: dropdown(Object.assign(Object.assign({}, pos), { onClose: () => setOpen(false) })) })] }), document.body)] })),
    ];
}
function Dropdown({ parent, children }) {
    const [isInit, setIsInit] = useState(false);
    const [pos, setPos] = useState(initPosition);
    const contRef = useRef(null);
    useLayoutEffect(() => {
        if (!contRef.current)
            return;
        const { width } = contRef.current.getBoundingClientRect();
        let left = parent.left;
        if (document.body.getBoundingClientRect().width - width < 0) {
            left = (window.innerWidth - width) / 2;
        }
        setPos({
            left,
            top: parent.top + parent.height + window.scrollY,
        });
        setIsInit(true);
    }, [parent]);
    return (_jsx("div", { className: concat("absolute ", isInit ? "opacity-100" : "opacity-0"), style: { left: pos.left, top: pos.top }, ref: contRef, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaG9vay9kcm9wZG93bi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBK0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFDLE1BQU0sRUFBc0IsWUFBWSxFQUFXLE1BQU0sY0FBYyxDQUFDO0FBV2hGLE1BQU0sQ0FBQyxPQUFPLFdBQVcsV0FBNkIsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQXlCLEVBQUU7SUFDMUYsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxRQUFRLENBQVcsWUFBWSxDQUFDLENBQUM7SUFFdkQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBb0IsSUFBSSxDQUFDLENBQUM7SUFFbEQsTUFBTSxPQUFPLEdBQXlDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUMvQixNQUFNLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0lB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