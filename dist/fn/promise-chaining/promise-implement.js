"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import AlertPromise from "../modal-promise/alert.js";
import { createRoot } from "react-dom/client";
import Suspend from "../../comp/layout/suspend/index.js";
Promise.prototype.alert = function (book, opts = {}) {
    this.catch((e) => {
        const message = e instanceof Error ? e.message : JSON.stringify(e);
        for (const key in book) {
            if (!message.includes(key))
                continue;
            if (!book[key])
                return;
            return AlertPromise(book[key], opts);
        }
        return AlertPromise(message, opts);
    });
};
Promise.prototype.suspend = function (onfulfilled, opts = {}) {
    return this.then(async (value) => {
        const cont = document.createElement("div");
        document.body.appendChild(cont);
        const root = createRoot(cont);
        root.render(_jsx(Suspend, { pending: true, wait: opts.wait, children: opts.children }));
        try {
            return onfulfilled ? await onfulfilled(value) : value;
        }
        catch (e) {
            throw e;
        }
        finally {
            root.unmount();
            cont.remove();
        }
    });
};
export default function () {
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS1pbXBsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vcHJvbWlzZS1jaGFpbmluZy9wcm9taXNlLWltcGxlbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sWUFBbUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxPQUFPLE1BQU0sMkJBQTJCLENBQUM7QUFhaEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxJQUErQixFQUFFLE9BQXFDLEVBQUU7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkUsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsU0FBUztZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPO1lBRXZCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsT0FBTyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFDM0IsV0FBaUYsRUFDakYsT0FBOEIsRUFBRTtJQUVoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQ1YsS0FBQyxPQUFPLElBQ1AsT0FBTyxFQUFFLElBQUksRUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FDdEIsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDO1lBQ0osT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUE2QixDQUFDO1FBQ2hGLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1osTUFBTSxDQUFDLENBQUM7UUFDVCxDQUFDO2dCQUFTLENBQUM7WUFDVixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTztJQUNiLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQyJ9