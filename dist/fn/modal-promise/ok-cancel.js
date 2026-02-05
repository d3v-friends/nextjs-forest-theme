"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import create from "./index.js";
import OkCancel from "../modal/ok-cancel-comp.js";
export default function (children, opts = {}) {
    return create((onClose) => (_jsx(OkCancel, Object.assign({}, opts, { onClose: onClose, children: children }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2stY2FuY2VsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZuL21vZGFsLXByb21pc2Uvb2stY2FuY2VsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBQzdCLE9BQU8sUUFBeUIsTUFBTSx5QkFBeUIsQ0FBQztBQUdoRSxNQUFNLENBQUMsT0FBTyxXQUNiLFFBQW1CLEVBQ25CLE9BQW9ELEVBQUU7SUFFdEQsT0FBTyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQzFCLEtBQUMsUUFBUSxvQkFDSixJQUFJLElBQ1IsT0FBTyxFQUFFLE9BQU8sWUFDZixRQUFRLElBQ0MsQ0FDWCxDQUFDLENBQUM7QUFDSixDQUFDIn0=