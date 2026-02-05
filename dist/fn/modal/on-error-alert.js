"use client";
import alert from "./alert.js";
export default function (book = {}, opts = {}) {
    return (value) => {
        if (!(value instanceof Error)) {
            console.error(value);
        }
        for (let message in book) {
            if (!value.message.includes(message)) {
                continue;
            }
            if (!book[message]) {
                return;
            }
            alert(book[message], opts);
            return;
        }
        alert(value.message, opts);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tZXJyb3ItYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vbW9kYWwvb24tZXJyb3ItYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE9BQU8sS0FBcUIsTUFBTSxTQUFTLENBQUM7QUFHNUMsTUFBTSxDQUFDLE9BQU8sV0FBVyxPQUFrQyxFQUFFLEVBQUUsT0FBOEIsRUFBRTtJQUM5RixPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBRUQsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDdEMsU0FBUztZQUNWLENBQUM7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ3BCLE9BQU87WUFDUixDQUFDO1lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixPQUFPO1FBQ1IsQ0FBQztRQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztBQUNILENBQUMifQ==