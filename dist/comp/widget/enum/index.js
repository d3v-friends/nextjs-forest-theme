import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { concat } from "nextjs-tools";
import cls from "../../../fn/class-names/index.js";
export default function ({ value, items }) {
    const idx = items.findIndex((v) => v.value === value);
    const item = items[idx === -1 ? 0 : idx];
    return (_jsxs("div", { className: "flex inline-flex items-center", children: [_jsx("div", { className: concat("h-3 w-3 rounded-full mr-1", cls.background[item.color]) }), _jsx("div", { className: "text-(--info)", children: item.label })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93aWRnZXQvZW51bS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxHQUFHLE1BQU0seUJBQXlCLENBQUM7QUFjMUMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQXFCO0lBQzdELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDdEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV6QyxPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUMsK0JBQStCLGFBQzdDLGNBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQ3ZGLGNBQUssU0FBUyxFQUFDLGVBQWUsWUFBRSxJQUFJLENBQUMsS0FBSyxHQUFPLElBQzVDLENBQ04sQ0FBQztBQUNILENBQUMifQ==