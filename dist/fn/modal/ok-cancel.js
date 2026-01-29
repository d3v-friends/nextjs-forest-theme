"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { fnVoid } from "nextjs-tools";
import modal from "./index.js";
export default function (children, opts = {}) {
    modal((onClose) => {
        let target = typeof children === "function" ? children(onClose) : children;
        return (_jsx(Alert, Object.assign({ onClose: onClose }, opts, { children: target })));
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
    return (_jsx("dialog", { onMouseUp: (e) => {
            if (e.button !== 0)
                return;
            if (backdrop)
                onClose();
        }, children: _jsxs("div", { className: "cont", onMouseUp: (e) => e.stopPropagation(), children: [!!header && _jsx("h3", { className: "header", children: header }), _jsx("article", { children: children }), _jsxs("div", { className: "text-right p-2", children: [_jsx("button", { ref: cancelButtonRef, className: "lined info mr-2", onClick: (e) => {
                                onClickCancel(e);
                                onClose();
                            }, children: cancelButton }), _jsx("button", { autoFocus: true, ref: okButtonRef, className: "filled", onClick: (e) => {
                                onClickOk(e);
                                onClose();
                            }, children: okButton })] })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stY2FuY2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZuL21vZGFsL29rLWNhbmNlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQzFELE9BQU8sRUFBQyxNQUFNLEVBQVMsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBZ0I1QixNQUFNLENBQUMsT0FBTyxXQUFXLFFBQTBCLEVBQUUsT0FBaUMsRUFBRTtJQUN2RixLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNqQixJQUFJLE1BQU0sR0FBYyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3RGLE9BQU8sQ0FDTixLQUFDLEtBQUssa0JBQ0wsT0FBTyxFQUFFLE9BQU8sSUFDWixJQUFJLGNBQ1AsTUFBTSxJQUNBLENBQ1IsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQU9ELFNBQVMsS0FBSyxDQUFDLEVBQ2QsT0FBTyxFQUNQLFFBQVEsRUFDUixRQUFRLEdBQUcsS0FBSyxFQUNoQixNQUFNLEdBQUcsSUFBSSxFQUNiLEtBQUssR0FBRyxJQUFJLEVBQ1osTUFBTSxFQUNOLFNBQVMsR0FBRyxNQUFNLEVBQ2xCLGFBQWEsR0FBRyxNQUFNLEVBQ3RCLFFBQVEsR0FBRyxJQUFJLEVBQ2YsWUFBWSxHQUFHLElBQUksR0FDOEI7SUFDakQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFvQixJQUFJLENBQUMsQ0FBQztJQUNwRCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQW9CLElBQUksQ0FBQyxDQUFDO0lBRXhELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTs7WUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxRQUFRO29CQUNaLElBQUksQ0FBQyxNQUFNO3dCQUFFLE9BQU87b0JBQ3BCLE1BQUEsZUFBZSxDQUFDLE9BQU8sMENBQUUsS0FBSyxFQUFFLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1AsS0FBSyxPQUFPO29CQUNYLElBQUksQ0FBQyxLQUFLO3dCQUFFLE9BQU87b0JBQ25CLE1BQUEsV0FBVyxDQUFDLE9BQU8sMENBQUUsS0FBSyxFQUFFLENBQUM7b0JBQzdCLE1BQU07WUFDUixDQUFDO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEMsT0FBTyxHQUFHLEVBQUU7WUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FDTixpQkFDQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQzNCLElBQUksUUFBUTtnQkFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDLFlBQ0QsZUFDQyxTQUFTLEVBQUMsTUFBTSxFQUNoQixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsYUFDcEMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxhQUFJLFNBQVMsRUFBQyxRQUFRLFlBQUUsTUFBTSxHQUFNLEVBQ2pELDRCQUFVLFFBQVEsR0FBVyxFQUM3QixlQUFLLFNBQVMsRUFBQyxnQkFBZ0IsYUFDOUIsaUJBQ0MsR0FBRyxFQUFFLGVBQWUsRUFDcEIsU0FBUyxFQUFDLGlCQUFpQixFQUMzQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQ0FDZCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCLE9BQU8sRUFBRSxDQUFDOzRCQUNYLENBQUMsWUFDQSxZQUFZLEdBQ0wsRUFFVCxpQkFDQyxTQUFTLFFBQ1QsR0FBRyxFQUFFLFdBQVcsRUFDaEIsU0FBUyxFQUFDLFFBQVEsRUFDbEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2QsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNiLE9BQU8sRUFBRSxDQUFDOzRCQUNYLENBQUMsWUFDQSxRQUFRLEdBQ0QsSUFDSixJQUNELEdBQ0UsQ0FDVCxDQUFDO0FBQ0gsQ0FBQyJ9