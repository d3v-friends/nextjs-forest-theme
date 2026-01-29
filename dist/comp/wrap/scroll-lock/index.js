"use client";
import { useEffect } from "react";
export default function ({ scrollable = false, children }) {
    useEffect(() => {
        document.body.style.overflow = scrollable ? "unset" : "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [scrollable]);
    return children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC93cmFwL3Njcm9sbC1sb2NrL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixPQUFPLEVBQVksU0FBUyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBTzNDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxVQUFVLEdBQUcsS0FBSyxFQUFFLFFBQVEsRUFBa0I7SUFDdkUsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRS9ELE9BQU8sR0FBRyxFQUFFO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QyxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRWpCLE9BQU8sUUFBUSxDQUFDO0FBQ2pCLENBQUMifQ==