"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useId, useState } from "react";
import { concat } from "nextjs-tools";
import ImgWarn from "web-asset/svg/regular/fi-rr-triangle-warning.svg";
import Image from "next/image";
export default function (_a) {
    var { className = "", value, onChange, onChangeInterceptor = (e) => e.target.value, label, invalidMessage, regexp, children } = _a, attr = __rest(_a, ["className", "value", "onChange", "onChangeInterceptor", "label", "invalidMessage", "regexp", "children"]);
    const id = useId();
    return (_jsxs("div", { className: concat(className, "input-container"), children: [_jsx(Label, { id: id, children: label }), _jsx(Aside, { aside: children, children: _jsx("input", Object.assign({ id: id, className: "lined", value: value, onChange: (e) => onChange(onChangeInterceptor(e)) }, attr)) }), _jsx(InvalidMessage, { value: value, regexp: regexp, invalidMessage: invalidMessage })] }));
}
function Label({ id, children }) {
    if (!children)
        return null;
    return (_jsx("label", { className: "no-drag", htmlFor: id, children: children }));
}
function InvalidMessage({ regexp, invalidMessage, value }) {
    const [isValid, setIsValid] = useState(true);
    useEffect(() => {
        if (!regexp)
            return;
        if (value === "") {
            setIsValid(true);
            return;
        }
        setIsValid(new RegExp(regexp).test(value));
    }, [value]);
    if (!regexp)
        return null;
    if (!invalidMessage)
        return null;
    return (_jsx("p", { className: "flex items-center", children: !isValid && (_jsxs(_Fragment, { children: [_jsx(Image, { className: "filter-(--danger-filter) mr-1", src: ImgWarn, alt: "warn", width: 15, height: 15 }), invalidMessage] })) }));
}
function Aside({ aside, children }) {
    if (!aside)
        return children;
    return (_jsxs("div", { className: "flex items-baseline", children: [children, _jsx("div", { className: "ml-2", children: aside })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9iYXNlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFFYixPQUFjLEVBQVksU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDbkUsT0FBTyxFQUFDLE1BQU0sRUFBUyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLE9BQU8sTUFBTSxrREFBa0QsQ0FBQztBQUN2RSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFXL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQVVQO1FBVk8sRUFDeEIsU0FBUyxHQUFHLEVBQUUsRUFDZCxLQUFLLEVBQ0wsUUFBUSxFQUNSLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFDM0MsS0FBSyxFQUNMLGNBQWMsRUFDZCxNQUFNLEVBQ04sUUFBUSxPQUVTLEVBRGQsSUFBSSxjQVRpQiwwR0FVeEIsQ0FETztJQUVQLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBRW5CLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLGFBQ25ELEtBQUMsS0FBSyxJQUFDLEVBQUUsRUFBRSxFQUFFLFlBQUcsS0FBSyxHQUFTLEVBQzlCLEtBQUMsS0FBSyxJQUFDLEtBQUssRUFBRSxRQUFRLFlBQ3JCLDhCQUNDLEVBQUUsRUFBRSxFQUFFLEVBQ04sU0FBUyxFQUFDLE9BQU8sRUFDakIsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUM3QyxJQUFJLEVBQ1AsR0FDSyxFQUNSLEtBQUMsY0FBYyxJQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxjQUFjLEVBQUUsY0FBYyxHQUM3QixJQUNHLENBQ04sQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLEtBQUssQ0FBQyxFQUFDLEVBQUUsRUFBRSxRQUFRLEVBQXVCO0lBQ2xELElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsT0FBTyxDQUNOLGdCQUNDLFNBQVMsRUFBQyxTQUFTLEVBQ25CLE9BQU8sRUFBRSxFQUFFLFlBQ1YsUUFBUSxHQUNGLENBQ1IsQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLGNBQWMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFrRDtJQUN2RyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3QyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixPQUFPO1FBQ1IsQ0FBQztRQUNELFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLElBQUksQ0FBQztJQUN6QixJQUFJLENBQUMsY0FBYztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRWpDLE9BQU8sQ0FDTixZQUFHLFNBQVMsRUFBQyxtQkFBbUIsWUFDOUIsQ0FBQyxPQUFPLElBQUksQ0FDWiw4QkFDQyxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUMsK0JBQStCLEVBQ3pDLEdBQUcsRUFBRSxPQUFPLEVBQ1osR0FBRyxFQUFDLE1BQU0sRUFDVixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEdBQ1QsRUFDRCxjQUFjLElBQ2IsQ0FDSCxHQUNFLENBQ0osQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQXVCO0lBQ3JELElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxRQUFRLENBQUM7SUFFNUIsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFDLHFCQUFxQixhQUNsQyxRQUFRLEVBQ1QsY0FBSyxTQUFTLEVBQUMsTUFBTSxZQUFFLEtBQUssR0FBTyxJQUM5QixDQUNOLENBQUM7QUFDSCxDQUFDIn0=