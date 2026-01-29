"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
export default function (children, opts = {}) {
    const cont = document.createElement("div");
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
function Alert({ onClose, children, backdrop = true, escape = true }) {
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
    return (_jsx("dialog", { onMouseUp: (e) => {
            if (e.button !== 0)
                return;
            if (backdrop)
                onClose();
        }, children: _jsx("div", { onMouseUp: (e) => e.stopPropagation(), children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFjLEVBQVksU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUUxRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFXNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxRQUE2QixFQUFFLE9BQThCLEVBQUU7SUFDdkYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQztJQUVGLElBQUksTUFBaUIsQ0FBQztJQUN0QixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztTQUFNLENBQUM7UUFDUCxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUNWLEtBQUMsS0FBSyxrQkFDTCxPQUFPLEVBQUUsT0FBTyxJQUNaLElBQUksY0FDUCxNQUFNLElBQ0EsQ0FDUixDQUFDO0FBQ0gsQ0FBQztBQU9ELFNBQVMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEdBQUcsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQStDO0lBQy9HLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVuQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRXBCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRO2dCQUFFLE9BQU87WUFDL0IsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLE9BQU8sR0FBRyxFQUFFO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPLENBQ04saUJBQ0MsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUMzQixJQUFJLFFBQVE7Z0JBQUUsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQyxZQUNELGNBQUssU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLFlBQUcsUUFBUSxHQUFPLEdBQ3BELENBQ1QsQ0FBQztBQUNILENBQUMifQ==