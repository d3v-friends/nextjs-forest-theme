"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { fnVoid } from "nextjs-tools";
import modal from "./index.js";
export default function (children, opts = {}) {
    modal((onClose) => {
        let target = typeof children === "function" ? children(onClose) : children;
        return (_jsx(Alert, Object.assign({ onClose: onClose }, opts, { children: target })));
    }, {
        backdrop: false,
        escape: false,
    });
}
function Alert({ onClose, children, backdrop = false, escape = true, enter = true, header, onClickOk = fnVoid, onClickCancel = fnVoid, okButton = "확인", cancelButton = "취소", }) {
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
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);
    return (_jsxs("div", { className: "cont", onMouseUp: (e) => e.stopPropagation(), children: [!!header && _jsx("h3", { className: "header primary", children: header }), _jsx("article", { children: children }), _jsxs("div", { className: "text-right p-2", children: [_jsx("button", { ref: cancelButtonRef, className: "lined info mr-2", onClick: (e) => {
                            onClickCancel(e);
                            onClose();
                        }, children: cancelButton }), _jsx("button", { autoFocus: true, ref: okButtonRef, className: "filled", onClick: (e) => {
                            onClickOk(e);
                            onClose();
                        }, children: okButton })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stY2FuY2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZuL21vZGFsL29rLWNhbmNlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzFELE9BQU8sRUFBQyxNQUFNLEVBQVMsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBZ0I1QixNQUFNLENBQUMsT0FBTyxXQUFXLFFBQTBCLEVBQUUsT0FBaUMsRUFBRTtJQUN2RixLQUFLLENBQ0osQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksTUFBTSxHQUFjLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdEYsT0FBTyxDQUNOLEtBQUMsS0FBSyxrQkFDTCxPQUFPLEVBQUUsT0FBTyxJQUNaLElBQUksY0FDUCxNQUFNLElBQ0EsQ0FDUixDQUFDO0lBQ0gsQ0FBQyxFQUNEO1FBQ0MsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUsS0FBSztLQUNiLENBQ0QsQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLEtBQUssQ0FBQyxFQUNkLE9BQU8sRUFDUCxRQUFRLEVBQ1IsUUFBUSxHQUFHLEtBQUssRUFDaEIsTUFBTSxHQUFHLElBQUksRUFDYixLQUFLLEdBQUcsSUFBSSxFQUNaLE1BQU0sRUFDTixTQUFTLEdBQUcsTUFBTSxFQUNsQixhQUFhLEdBQUcsTUFBTSxFQUN0QixRQUFRLEdBQUcsSUFBSSxFQUNmLFlBQVksR0FBRyxJQUFJLEdBQzhCO0lBQ2pELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBb0IsSUFBSSxDQUFDLENBQUM7SUFDcEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFvQixJQUFJLENBQUMsQ0FBQztJQUV4RCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFnQixFQUFFLEVBQUU7O1lBQ3BDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssUUFBUTtvQkFDWixJQUFJLENBQUMsTUFBTTt3QkFBRSxPQUFPO29CQUNwQixNQUFBLGVBQWUsQ0FBQyxPQUFPLDBDQUFFLEtBQUssRUFBRSxDQUFDO29CQUNqQyxNQUFNO2dCQUNQLEtBQUssT0FBTztvQkFDWCxJQUFJLENBQUMsS0FBSzt3QkFBRSxPQUFPO29CQUNuQixNQUFBLFdBQVcsQ0FBQyxPQUFPLDBDQUFFLEtBQUssRUFBRSxDQUFDO29CQUM3QixNQUFNO1lBQ1IsQ0FBQztRQUNGLENBQUMsQ0FBQztRQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLE9BQU8sR0FBRyxFQUFFO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPLENBQ04sZUFDQyxTQUFTLEVBQUMsTUFBTSxFQUNoQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsYUFDcEMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxhQUFJLFNBQVMsRUFBQyxnQkFBZ0IsWUFBRSxNQUFNLEdBQU0sRUFDekQsNEJBQVUsUUFBUSxHQUFXLEVBQzdCLGVBQUssU0FBUyxFQUFDLGdCQUFnQixhQUM5QixpQkFDQyxHQUFHLEVBQUUsZUFBZSxFQUNwQixTQUFTLEVBQUMsaUJBQWlCLEVBQzNCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFOzRCQUNkLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDakIsT0FBTyxFQUFFLENBQUM7d0JBQ1gsQ0FBQyxZQUNBLFlBQVksR0FDTCxFQUVULGlCQUNDLFNBQVMsUUFDVCxHQUFHLEVBQUUsV0FBVyxFQUNoQixTQUFTLEVBQUMsUUFBUSxFQUNsQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTs0QkFDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2IsT0FBTyxFQUFFLENBQUM7d0JBQ1gsQ0FBQyxZQUNBLFFBQVEsR0FDRCxJQUNKLElBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9