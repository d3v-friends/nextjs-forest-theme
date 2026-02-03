"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import modal from "./index.js";
const defaultClick = (onClose) => () => onClose();
export default function (children, opts = {}) {
    modal((onClose) => {
        let target = typeof children === "function" ? children(onClose) : children;
        return (_jsx(Alert, Object.assign({ onClose: onClose }, opts, { children: target })));
    }, {
        backdrop: false,
        escape: false,
    });
}
function Alert({ onClose, children, escape = true, enter = true, header, onClickOk = defaultClick, onClickCancel = defaultClick, okButton = "확인", cancelButton = "취소", }) {
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
    return (_jsxs("div", { className: "cont", onMouseUp: (e) => e.stopPropagation(), children: [!!header && _jsx("h3", { className: "header primary", children: header }), _jsx("article", { children: children }), _jsxs("div", { className: "text-right p-2", children: [_jsx("button", { ref: cancelButtonRef, className: "lined info mr-2", onClick: onClickCancel(onClose), children: cancelButton }), _jsx("button", { autoFocus: true, ref: okButtonRef, className: "filled", onClick: onClickOk(onClose), children: okButton })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stY2FuY2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZuL21vZGFsL29rLWNhbmNlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTFELE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQWdCNUIsTUFBTSxZQUFZLEdBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUVsRSxNQUFNLENBQUMsT0FBTyxXQUFXLFFBQTBCLEVBQUUsT0FBaUMsRUFBRTtJQUN2RixLQUFLLENBQ0osQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksTUFBTSxHQUFjLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdEYsT0FBTyxDQUNOLEtBQUMsS0FBSyxrQkFDTCxPQUFPLEVBQUUsT0FBTyxJQUNaLElBQUksY0FDUCxNQUFNLElBQ0EsQ0FDUixDQUFDO0lBQ0gsQ0FBQyxFQUNEO1FBQ0MsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztLQUNiLENBQ0QsQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLEtBQUssQ0FBQyxFQUNkLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxHQUFHLElBQUksRUFDYixLQUFLLEdBQUcsSUFBSSxFQUNaLE1BQU0sRUFDTixTQUFTLEdBQUcsWUFBWSxFQUN4QixhQUFhLEdBQUcsWUFBWSxFQUM1QixRQUFRLEdBQUcsSUFBSSxFQUNmLFlBQVksR0FBRyxJQUFJLEdBQzhCO0lBQ2pELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBb0IsSUFBSSxDQUFDLENBQUM7SUFDcEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFvQixJQUFJLENBQUMsQ0FBQztJQUV4RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFnQixFQUFFLEVBQUU7O1lBQ3BDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssUUFBUTtvQkFDWixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPO29CQUNwQixNQUFBLGVBQWUsQ0FBQyxPQUFPLDBDQUFFLEtBQUssRUFBRSxDQUFDO29CQUNqQyxNQUFNO2dCQUNQLEtBQUssT0FBTztvQkFDWCxJQUFJLENBQUMsS0FBSzt3QkFBRSxPQUFPO29CQUNuQixNQUFBLFdBQVcsQ0FBQyxPQUFPLDBDQUFFLEtBQUssRUFBRSxDQUFDO29CQUM3QixNQUFNO1lBQ1IsQ0FBQztRQUNGLENBQUMsQ0FBQztRQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTixlQUNDLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxhQUNwQyxDQUFDLENBQUMsTUFBTSxJQUFJLGFBQUksU0FBUyxFQUFDLGdCQUFnQixZQUFFLE1BQU0sR0FBTSxFQUN6RCw0QkFBVSxRQUFRLEdBQVcsRUFDN0IsZUFBSyxTQUFTLEVBQUMsZ0JBQWdCLGFBQzlCLGlCQUNDLEdBQUcsRUFBRSxlQUFlLEVBQ3BCLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFDOUIsWUFBWSxHQUNMLEVBRVQsaUJBQ0MsU0FBUyxRQUNULEdBQUcsRUFBRSxXQUFXLEVBQ2hCLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQzFCLFFBQVEsR0FDRCxJQUNKLElBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9