"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cls } from "../../index.js";
import { concat } from "nextjs-tools";
const Style = {
    padding: "p-3",
    paddingTitle: "pt-3 pl-3 pr-3 pb-1",
    paddingContent: "pt-1 pl-3 pr-3 pb-3",
};
function Title({ children }) {
    if (!children)
        return _jsx("div", { className: "h-2" });
    return _jsx("div", { className: concat("text-xl font-bold", Style.paddingTitle, cls.text.deepPrimary), children: children });
}
function Content({ children }) {
    if (!children)
        return null;
    return _jsx("div", { className: concat("text-(--info)", Style.paddingContent), children: children });
}
function Ok({ onClick, children = "확인" }) {
    return (_jsx("div", { className: concat("flex justify-end", Style.padding), children: _jsx("button", { className: "filled", onClick: onClick, children: children }) }));
}
function OkCancel({ onClickOk, onClickCancel, okButton = "확인", cancelButton = "취소" }) {
    return (_jsxs("div", { className: concat("flex justify-end", Style.padding), children: [_jsx("button", { onClick: onClickOk, className: "lined mr-2", children: cancelButton }), _jsx("button", { className: "filled", onClick: onClickCancel, children: okButton })] }));
}
function Body({ children, className = "min-w-[300px]" }) {
    return (_jsx("div", { className: concat(cls.background.panel, cls.shadow.normal, "border-1 border-(--border)", className), children: children }));
}
export default {
    Title,
    Content,
    Body,
    Ok,
    OkCancel,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaG9vay9tb2RhbC9lbGVtcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVwQyxNQUFNLEtBQUssR0FBRztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsWUFBWSxFQUFFLHFCQUFxQjtJQUNuQyxjQUFjLEVBQUUscUJBQXFCO0NBQ3JDLENBQUM7QUFFRixTQUFTLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBbUM7SUFDMUQsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLGNBQUssU0FBUyxFQUFDLEtBQUssR0FBRyxDQUFDO0lBQzlDLE9BQU8sY0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBRyxRQUFRLEdBQU8sQ0FBQztBQUNoSCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQW1DO0lBQzVELElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsT0FBTyxjQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBRyxRQUFRLEdBQU8sQ0FBQztBQUN4RixDQUFDO0FBT0QsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLElBQUksRUFBb0I7SUFDeEQsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQ3hELGlCQUNDLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxPQUFPLFlBQ2YsUUFBUSxHQUNELEdBQ0osQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQVNELFNBQVMsUUFBUSxDQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxRQUFRLEdBQUcsSUFBSSxFQUFFLFlBQVksR0FBRyxJQUFJLEVBQTBCO0lBQzFHLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUN4RCxpQkFDQyxPQUFPLEVBQUUsU0FBUyxFQUNsQixTQUFTLEVBQUMsWUFBWSxZQUNyQixZQUFZLEdBQ0wsRUFDVCxpQkFDQyxTQUFTLEVBQUMsUUFBUSxFQUNsQixPQUFPLEVBQUUsYUFBYSxZQUNyQixRQUFRLEdBQ0QsSUFDSixDQUNOLENBQUM7QUFDSCxDQUFDO0FBT0QsU0FBUyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsU0FBUyxHQUFHLGVBQWUsRUFBc0I7SUFDekUsT0FBTyxDQUNOLGNBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSw0QkFBNEIsRUFBRSxTQUFTLENBQUMsWUFDdEcsUUFBUSxHQUNKLENBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlO0lBQ2QsS0FBSztJQUNMLE9BQU87SUFDUCxJQUFJO0lBQ0osRUFBRTtJQUNGLFFBQVE7Q0FDUixDQUFDIn0=