"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { fnVoid } from "nextjs-tools";
import modal from "./index.js";
export default function (children = "", opts = {}) {
    modal((onClose) => {
        let target = typeof children === "function" ? children(onClose) : children;
        return (_jsx(Alert, Object.assign({ onClose: onClose }, opts, { children: target })));
    });
}
function Alert({ onClose, children, backdrop = true, escape = true, header, onClick = fnVoid, button = "확인", }) {
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        if (!escape)
            return;
        const handler = (e) => {
            if (e.key !== "Escape")
                return;
            onCloseRef.current();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);
    return (_jsx("dialog", { onMouseUp: (e) => {
            if (e.button !== 0)
                return;
            if (backdrop)
                onClose();
        }, children: _jsxs("div", { className: "cont", onMouseUp: (e) => e.stopPropagation(), children: [!!header && _jsx("h3", { className: "header", children: header }), _jsx("article", { children: children }), _jsx("div", { className: "text-right p-2", children: _jsx("button", { autoFocus: true, className: "filled", onClick: (e) => {
                            onClick(e);
                            onClose();
                        }, children: button }) })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUMxRCxPQUFPLEVBQUMsTUFBTSxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQVk1QixNQUFNLENBQUMsT0FBTyxXQUFXLFdBQTBCLEVBQUUsRUFBRSxPQUE4QixFQUFFO0lBQ3RGLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ2pCLElBQUksTUFBTSxHQUFjLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdEYsT0FBTyxDQUNOLEtBQUMsS0FBSyxrQkFDTCxPQUFPLEVBQUUsT0FBTyxJQUNaLElBQUksY0FDUCxNQUFNLElBQ0EsQ0FDUixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBT0QsU0FBUyxLQUFLLENBQUMsRUFDZCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFFBQVEsR0FBRyxJQUFJLEVBQ2YsTUFBTSxHQUFHLElBQUksRUFDYixNQUFNLEVBQ04sT0FBTyxHQUFHLE1BQU0sRUFDaEIsTUFBTSxHQUFHLElBQUksR0FDaUM7SUFDOUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFFcEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFnQixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVE7Z0JBQUUsT0FBTztZQUMvQixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEMsT0FBTyxHQUFHLEVBQUU7WUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTixpQkFDQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQzNCLElBQUksUUFBUTtnQkFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDLFlBQ0QsZUFDQyxTQUFTLEVBQUMsTUFBTSxFQUNoQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsYUFDcEMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxhQUFJLFNBQVMsRUFBQyxRQUFRLFlBQUUsTUFBTSxHQUFNLEVBQ2pELDRCQUFVLFFBQVEsR0FBVyxFQUM3QixjQUFLLFNBQVMsRUFBQyxnQkFBZ0IsWUFDOUIsaUJBQ0MsU0FBUyxRQUNULFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFOzRCQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDWCxPQUFPLEVBQUUsQ0FBQzt3QkFDWCxDQUFDLFlBQ0EsTUFBTSxHQUNDLEdBQ0osSUFDRCxHQUNFLENBQ1QsQ0FBQztBQUNILENBQUMifQ==