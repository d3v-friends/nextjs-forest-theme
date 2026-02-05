"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export default function ({ onClose, children, escape = true, enter = true, header, okButton = "확인", cancelButton = "취소", }) {
    const okButtonRef = useRef(null);
    const cancelButtonRef = useRef(null);
    useEffect(() => {
        const handler = (e) => {
            var _a, _b;
            switch (e.key) {
                case "Escape":
                    if (!escape)
                        return;
                    (_a = cancelButtonRef.current) === null || _a === void 0 ? void 0 : _a.click();
                    break;
                case "Enter":
                    if (!enter)
                        return;
                    (_b = okButtonRef.current) === null || _b === void 0 ? void 0 : _b.click();
                    break;
            }
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, []);
    return (_jsxs("div", { className: "bg-(--modal) rounded shadow-2xl shadow-(--shadow) min-w-80", onMouseUp: (e) => e.stopPropagation(), children: [!!header && _jsx("h3", { className: "header primary pl-3 pr-3 pt-2", children: header }), _jsx("article", { className: "pl-3 pr-3 pt-2", children: children }), _jsxs("div", { className: "text-right p-2", children: [_jsx("button", { ref: cancelButtonRef, className: "lined info mr-2", onClick: () => onClose(false), children: cancelButton }), _jsx("button", { autoFocus: true, ref: okButtonRef, className: "filled", onClick: () => onClose(true), children: okButton })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stY2FuY2VsLWNvbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvb2stY2FuY2VsLWNvbXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLE9BQU8sQ0FBQztBQWExRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxHQUFHLElBQUksRUFDYixLQUFLLEdBQUcsSUFBSSxFQUNaLE1BQU0sRUFDTixRQUFRLEdBQUcsSUFBSSxFQUNmLFlBQVksR0FBRyxJQUFJLEdBQ007SUFDekIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFvQixJQUFJLENBQUMsQ0FBQztJQUNwRCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQW9CLElBQUksQ0FBQyxDQUFDO0lBRXhELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTs7WUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxRQUFRO29CQUNaLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU87b0JBQ3BCLE1BQUEsZUFBZSxDQUFDLE9BQU8sMENBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1AsS0FBSyxPQUFPO29CQUNYLElBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU87b0JBQ25CLE1BQUEsV0FBVyxDQUFDLE9BQU8sMENBQUUsS0FBSyxFQUFFLENBQUM7b0JBQzdCLE1BQU07WUFDUixDQUFDO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUNOLGVBQ0MsU0FBUyxFQUFDLDREQUE0RCxFQUN0RSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsYUFDcEMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxhQUFJLFNBQVMsRUFBQywrQkFBK0IsWUFBRSxNQUFNLEdBQU0sRUFDeEUsa0JBQVMsU0FBUyxFQUFDLGdCQUFnQixZQUFFLFFBQVEsR0FBVyxFQUN4RCxlQUFLLFNBQVMsRUFBQyxnQkFBZ0IsYUFDOUIsaUJBQ0MsR0FBRyxFQUFFLGVBQWUsRUFDcEIsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixZQUFZLEdBQ0wsRUFFVCxpQkFDQyxTQUFTLFFBQ1QsR0FBRyxFQUFFLFdBQVcsRUFDaEIsU0FBUyxFQUFDLFFBQVEsRUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFDM0IsUUFBUSxHQUNELElBQ0osSUFDRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=