"use server";
import { jsx as _jsx } from "react/jsx-runtime";
import localFont from "next/font/local";
import "../../../../asset/style/index.scss";
export default async function ({ children, lang = "ko" }) {
    return (_jsx("html", { lang: lang, children: _jsx("body", { className: "font-[14px] lg:font-[16px] ", children: children }) }));
}
const astasans = localFont({
    display: "swap",
    preload: true,
    src: [
        {
            path: "../../../../asset/font/astasans/100.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../asset/font/astasans/400.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../asset/font/astasans/500.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../../asset/font/astasans/600.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../asset/font/astasans/700.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../asset/font/astasans/800.ttf",
            weight: "800",
            style: "normal",
        },
    ],
});
const raleway = localFont({
    display: "swap",
    preload: true,
    src: [
        {
            path: "../../../../asset/font/raleway/100.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/200.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/300.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/400.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/500.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/600.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/700.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../../../asset/font/raleway/800.ttf",
            weight: "800",
            style: "normal",
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWcvaHRtbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sb0NBQW9DLENBQUM7QUFPNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBa0I7SUFDdEUsT0FBTyxDQUNOLGVBQU0sSUFBSSxFQUFFLElBQUksWUFDZixlQUFNLFNBQVMsRUFBQyw2QkFBNkIsWUFBRSxRQUFRLEdBQVEsR0FDekQsQ0FDUCxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUMxQixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRSxJQUFJO0lBQ2IsR0FBRyxFQUFFO1FBQ0o7WUFDQyxJQUFJLEVBQUUseUNBQXlDO1lBQy9DLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHlDQUF5QztZQUMvQyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx5Q0FBeUM7WUFDL0MsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUseUNBQXlDO1lBQy9DLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHlDQUF5QztZQUMvQyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx5Q0FBeUM7WUFDL0MsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO0tBQ0Q7Q0FDRCxDQUFDLENBQUM7QUFFSCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDekIsT0FBTyxFQUFFLE1BQU07SUFDZixPQUFPLEVBQUUsSUFBSTtJQUNiLEdBQUcsRUFBRTtRQUNKO1lBQ0MsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsd0NBQXdDO1lBQzlDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO1FBQ0Q7WUFDQyxJQUFJLEVBQUUsd0NBQXdDO1lBQzlDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDZjtRQUNEO1lBQ0MsSUFBSSxFQUFFLHdDQUF3QztZQUM5QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNDLElBQUksRUFBRSx3Q0FBd0M7WUFDOUMsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsUUFBUTtTQUNmO0tBQ0Q7Q0FDRCxDQUFDLENBQUMifQ==