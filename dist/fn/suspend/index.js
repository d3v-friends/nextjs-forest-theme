"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Suspend from "../../comp/layout/suspend/index.js";
export default function (job, opts = {}) {
    const cont = document.createElement("div");
    document.body.appendChild(cont);
    const root = createRoot(cont);
    const onClose = () => {
        root.unmount();
        cont.remove();
    };
    root.render(_jsx(Suspend, { pending: true, wait: opts.wait, children: opts.children }));
    job.finally(() => onClose());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vc3VzcGVuZC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLE9BQU8sTUFBTSwyQkFBMkIsQ0FBQztBQVFoRCxNQUFNLENBQUMsT0FBTyxXQUFjLEdBQWUsRUFBRSxPQUE4QixFQUFFO0lBQzVFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsTUFBTSxDQUNWLEtBQUMsT0FBTyxJQUNQLE9BQU8sRUFBRSxJQUFJLEVBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQ3RCLENBQ0YsQ0FBQztJQUVGLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUM5QixDQUFDIn0=