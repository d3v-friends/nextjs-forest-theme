"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
export default function (children, opts = {}) {
    const cont = document.createElement("dialog");
    cont.onmouseup = (e) => {
        if (e.button !== 0)
            return;
        if (opts.backdrop)
            onClose();
    };
    document.body.appendChild(cont);
    const root = createRoot(cont);
    const onClose = () => {
        root.unmount();
        cont.remove();
    };
    let target;
    if (typeof children === "function") {
        target = children(onClose);
    }
    else {
        target = children;
    }
    root.render(_jsx(Alert, Object.assign({ onClose: onClose }, opts, { children: target })));
}
function Alert({ onClose, children, escape = true }) {
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        if (!escape)
            return;
        const handler = (e) => {
            if (e.key !== "Escape")
                return;
            onCloseRef.current();
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
    return _jsx("div", { onMouseUp: (e) => e.stopPropagation(), children: children });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUUxRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFXNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxRQUE2QixFQUFFLE9BQThCLEVBQUU7SUFDdkYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPO1FBQzNCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUVGLElBQUksTUFBaUIsQ0FBQztJQUN0QixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztTQUFNLENBQUM7UUFDUCxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUNWLEtBQUMsS0FBSyxrQkFDTCxPQUFPLEVBQUUsT0FBTyxJQUNaLElBQUksY0FDUCxNQUFNLElBQ0EsQ0FDUixDQUFDO0FBQ0gsQ0FBQztBQU9ELFNBQVMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUErQztJQUM5RixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUVwQixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQWdCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUTtnQkFBRSxPQUFPO1lBQy9CLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFDRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN4QyxPQUFPLEdBQUcsRUFBRTtZQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxjQUFLLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxZQUFHLFFBQVEsR0FBTyxDQUFDO0FBQ3JFLENBQUMifQ==