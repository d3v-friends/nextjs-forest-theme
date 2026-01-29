"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Elems from "./elems.js";
import { fnVoid } from "nextjs-tools";
const { Title, Body, Content, Ok, OkCancel } = Elems;
function ok({ title, content, onClickOk = fnVoid, okButton, bodyClassName }) {
    return (onClose) => (_jsxs(Body, { className: bodyClassName, children: [_jsx(Title, { children: title }), _jsx(Content, { children: content }), _jsx(Ok, { onClick: (e) => {
                    e.stopPropagation();
                    onClickOk(e);
                    onClose();
                }, children: okButton })] }));
}
function okCancel({ title, content, onClickOk = fnVoid, okButton, onClickCancel = fnVoid, cancelButton, bodyClassName, }) {
    return (onClose) => (_jsxs(Body, { className: bodyClassName, children: [_jsx(Title, { children: title }), _jsx(Content, { children: content }), _jsx(OkCancel, { onClickOk: (e) => {
                    e.stopPropagation();
                    onClickOk(e);
                    onClose();
                }, onClickCancel: (e) => {
                    e.stopPropagation();
                    onClickCancel(e);
                    onClose();
                }, okButton: okButton, cancelButton: cancelButton })] }));
}
export default { ok, okCancel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuLW1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2hvb2svbW9kYWwvZ2VuLW1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFDO0FBRTVCLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFcEMsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUMsR0FBRyxLQUFLLENBQUM7QUFVbkQsU0FBUyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBRyxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBb0I7SUFDM0YsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDbkIsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFFLGFBQWEsYUFDN0IsS0FBQyxLQUFLLGNBQUUsS0FBSyxHQUFTLEVBQ3RCLEtBQUMsT0FBTyxjQUFFLE9BQU8sR0FBVyxFQUM1QixLQUFDLEVBQUUsSUFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3BCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixPQUFPLEVBQUUsQ0FBQztnQkFDWCxDQUFDLFlBQ0EsUUFBUSxHQUNMLElBQ0MsQ0FDUCxDQUFDO0FBQ0gsQ0FBQztBQVlELFNBQVMsUUFBUSxDQUFDLEVBQ2pCLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxHQUFHLE1BQU0sRUFDbEIsUUFBUSxFQUNSLGFBQWEsR0FBRyxNQUFNLEVBQ3RCLFlBQVksRUFDWixhQUFhLEdBQ1k7SUFDekIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FDbkIsTUFBQyxJQUFJLElBQUMsU0FBUyxFQUFFLGFBQWEsYUFDN0IsS0FBQyxLQUFLLGNBQUUsS0FBSyxHQUFTLEVBQ3RCLEtBQUMsT0FBTyxjQUFFLE9BQU8sR0FBVyxFQUM1QixLQUFDLFFBQVEsSUFDUixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDaEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNwQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsT0FBTyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxFQUNELGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUNwQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3BCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsT0FBTyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxFQUNELFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFlBQVksRUFBRSxZQUFZLEdBQ3pCLElBQ0ksQ0FDUCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFDLENBQUMifQ==