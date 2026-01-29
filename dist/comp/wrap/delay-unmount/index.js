"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function ({ show: init = false, children, delay = 300 }) {
    const [show, onChangeShow] = useState(init);
    useEffect(() => {
        if (init) {
            onChangeShow(true);
            return;
        }
        setTimeout(() => onChangeShow(false), delay);
    }, [init]);
    if (!show)
        return null;
    return _jsx("div", { onAnimationEnd: () => onChangeShow(false), children: children });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93cmFwL2RlbGF5LXVubW91bnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQVksU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQVFyRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQTJCO0lBQzdGLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1YsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLE9BQU87UUFDUixDQUFDO1FBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRVgsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUV2QixPQUFPLGNBQUssY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBRyxRQUFRLEdBQU8sQ0FBQztBQUN6RSxDQUFDIn0=