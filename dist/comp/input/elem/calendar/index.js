"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Calendar from "react-calendar";
import Image from "next/image";
import ImgPrev from "web-asset/svg/regular/fi-rr-angle-small-left.svg";
import ImgPrev2 from "web-asset/svg/regular/fi-rr-angle-double-small-left.svg";
import ImgNext from "web-asset/svg/regular/fi-rr-angle-small-right.svg";
import ImgNext2 from "web-asset/svg/regular/fi-rr-angle-double-small-right.svg";
import { DateTime } from "luxon";
export default function ({ value, onChange, locale = "ko-kr", timezone = "Asia/Seoul", className }) {
    return (_jsx("div", { className: className, children: _jsx(Calendar, { className: "forest", locale: locale, value: value, prevLabel: _jsx(Button, { alt: "prev", children: ImgPrev }), prev2Label: _jsx(Button, { alt: "prev2", children: ImgPrev2 }), nextLabel: _jsx(Button, { alt: "next", children: ImgNext }), next2Label: _jsx(Button, { alt: "next2", children: ImgNext2 }), onChange: (value, e) => {
                let date = value instanceof Date ? value : null;
                if (date) {
                    date = DateTime.fromJSDate(date)
                        .toUTC()
                        .setZone(timezone)
                        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                        .toJSDate();
                }
                onChange(date);
            } }) }));
}
function Button({ children, alt }) {
    return (_jsx("div", { className: "flex items-center justify-center group", children: _jsx(Image, { className: "filter-(--primary-info)", src: children, alt: alt, width: 20, height: 20 }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC9pbnB1dC9lbGVtL2NhbGVuZGFyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLE9BQU8sTUFBTSxrREFBa0QsQ0FBQztBQUN2RSxPQUFPLFFBQVEsTUFBTSx5REFBeUQsQ0FBQztBQUMvRSxPQUFPLE9BQU8sTUFBTSxtREFBbUQsQ0FBQztBQUN4RSxPQUFPLFFBQVEsTUFBTSwwREFBMEQsQ0FBQztBQUNoRixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBWS9CLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxPQUFPLEVBQUUsUUFBUSxHQUFHLFlBQVksRUFBRSxTQUFTLEVBQWtCO0lBQ2hILE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBRSxTQUFTLFlBQ3hCLEtBQUMsUUFBUSxJQUNSLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFLEtBQUssRUFDWixTQUFTLEVBQUUsS0FBQyxNQUFNLElBQUMsR0FBRyxFQUFDLE1BQU0sWUFBRSxPQUFPLEdBQVUsRUFDaEQsVUFBVSxFQUFFLEtBQUMsTUFBTSxJQUFDLEdBQUcsRUFBQyxPQUFPLFlBQUUsUUFBUSxHQUFVLEVBQ25ELFNBQVMsRUFBRSxLQUFDLE1BQU0sSUFBQyxHQUFHLEVBQUMsTUFBTSxZQUFFLE9BQU8sR0FBVSxFQUNoRCxVQUFVLEVBQUUsS0FBQyxNQUFNLElBQUMsR0FBRyxFQUFDLE9BQU8sWUFBRSxRQUFRLEdBQVUsRUFDbkQsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QixJQUFJLElBQUksR0FBRyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDVixJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7eUJBQzlCLEtBQUssRUFBRTt5QkFDUCxPQUFPLENBQUMsUUFBUSxDQUFDO3lCQUNqQixHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFDLENBQUM7eUJBQ3BELFFBQVEsRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsR0FDQSxHQUNHLENBQ04sQ0FBQztBQUNILENBQUM7QUFPRCxTQUFTLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQXdCO0lBQ3JELE9BQU8sQ0FDTixjQUFLLFNBQVMsRUFBQyx3Q0FBd0MsWUFDdEQsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLHlCQUF5QixFQUNuQyxHQUFHLEVBQUUsUUFBUSxFQUNiLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxHQUNULEdBQ0csQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9