"use client";
import alert from "./alert.js";
export default function (book, opts = {}) {
    return (value) => {
        if (!(value instanceof Error)) {
            alert(value);
        }
        for (let message in book) {
            if (!value.message.includes(message)) {
                continue;
            }
            alert(book[message], opts);
            return;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tZXJyb3ItYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvb24tZXJyb3ItYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sS0FBcUIsTUFBTSxTQUFTLENBQUM7QUFHNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxJQUErQixFQUFFLE9BQThCLEVBQUU7SUFDekYsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNkLENBQUM7UUFFRCxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUN0QyxTQUFTO1lBQ1YsQ0FBQztZQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0IsT0FBTztRQUNSLENBQUM7SUFDRixDQUFDLENBQUM7QUFDSCxDQUFDIn0=