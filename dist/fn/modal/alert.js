"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnVoid } from "nextjs-tools";
import modal from "./index.js";
export default function (children = "", opts = {}) {
    modal((onClose) => {
        let target = typeof children === "function" ? children(onClose) : children;
        return (_jsx(Alert, Object.assign({ onClose: onClose }, opts, { children: target })));
    }, {
        backdrop: opts.backdrop,
        escape: opts.escape,
    });
}
function Alert({ onClose, children, header, onClick = fnVoid, button = "확인", }) {
    return (_jsxs("div", { className: "cont", children: [!!header && _jsx("h3", { className: "header primary", children: header }), _jsx("article", { children: children }), _jsx("div", { className: "text-right p-2", children: _jsx("button", { autoFocus: true, className: "filled", onClick: (e) => {
                        onClick(e);
                        onClose();
                    }, children: button }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEVBQUMsTUFBTSxFQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQVk1QixNQUFNLENBQUMsT0FBTyxXQUFXLFdBQTBCLEVBQUUsRUFBRSxPQUE4QixFQUFFO0lBQ3RGLEtBQUssQ0FDSixDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxNQUFNLEdBQWMsT0FBTyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN0RixPQUFPLENBQ04sS0FBQyxLQUFLLGtCQUNMLE9BQU8sRUFBRSxPQUFPLElBQ1osSUFBSSxjQUNQLE1BQU0sSUFDQSxDQUNSLENBQUM7SUFDSCxDQUFDLEVBQ0Q7UUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0tBQ25CLENBQ0QsQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLEtBQUssQ0FBQyxFQUNkLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sR0FBRyxNQUFNLEVBQ2hCLE1BQU0sR0FBRyxJQUFJLEdBQ2lDO0lBQzlDLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBQyxNQUFNLGFBQ25CLENBQUMsQ0FBQyxNQUFNLElBQUksYUFBSSxTQUFTLEVBQUMsZ0JBQWdCLFlBQUUsTUFBTSxHQUFNLEVBQ3pELDRCQUFVLFFBQVEsR0FBVyxFQUM3QixjQUFLLFNBQVMsRUFBQyxnQkFBZ0IsWUFDOUIsaUJBQ0MsU0FBUyxRQUNULFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsQ0FBQztvQkFDWCxDQUFDLFlBQ0EsTUFBTSxHQUNDLEdBQ0osSUFDRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=