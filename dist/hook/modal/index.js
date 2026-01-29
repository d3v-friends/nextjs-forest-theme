"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ModalCont from "./modal-cont.js";
export default function () {
    const [content, setContent] = useState(null);
    return [
        (children) => (_jsxs(_Fragment, { children: [children, content && (_jsx(ModalCont, { onClose: () => setContent(null), style: content.attribute.style, isBackdrop: content.attribute.backdrop, children: content.modal }))] })),
        (modal, attribute = {}) => {
            setContent({
                modal,
                attribute,
            });
        },
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaG9vay9tb2RhbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFFakQsT0FBTyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBbUJyQyxNQUFNLENBQUMsT0FBTztJQUNiLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFrQixJQUFJLENBQUMsQ0FBQztJQUU5RCxPQUFPO1FBQ04sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ2IsOEJBQ0UsUUFBUSxFQUNSLE9BQU8sSUFBSSxDQUNYLEtBQUMsU0FBUyxJQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFDOUIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxZQUNyQyxPQUFPLENBQUMsS0FBSyxHQUNILENBQ1osSUFDQyxDQUNIO1FBQ0QsQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQztnQkFDVixLQUFLO2dCQUNMLFNBQVM7YUFDVCxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUMifQ==