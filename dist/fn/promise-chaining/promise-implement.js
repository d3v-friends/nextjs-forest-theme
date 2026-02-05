"use client";
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
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
        const defer = () => ({
            [Symbol.dispose]: () => {
                root.unmount();
                cont.remove();
            },
        });
        {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                const _ = __addDisposableResource(env_1, defer(), false);
                return onfulfilled ? await onfulfilled(value) : value;
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
    });
};
export default function () {
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS1pbXBsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vcHJvbWlzZS1jaGFpbmluZy9wcm9taXNlLWltcGxlbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYixPQUFPLFlBQW1DLE1BQU0sd0JBQXdCLENBQUM7QUFFekUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLDJCQUEyQixDQUFDO0FBYWhELE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBK0IsRUFBRSxPQUFxQyxFQUFFO0lBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNoQixNQUFNLE9BQU8sR0FBRyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUFFLFNBQVM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTztZQUV2QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELE9BQU8sWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQzNCLFdBQWlGLEVBQ2pGLE9BQThCLEVBQUU7SUFFaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsTUFBTSxDQUNWLEtBQUMsT0FBTyxJQUNQLE9BQU8sRUFBRSxJQUFJLEVBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQ3RCLENBQ0YsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2YsQ0FBQztTQUNELENBQUMsQ0FBQztRQUVILENBQUM7OztnQkFDQSxNQUFNLENBQUMsa0NBQUcsS0FBSyxFQUFFLFFBQUEsQ0FBQztnQkFDbEIsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUE2QixDQUFDOzs7Ozs7Ozs7U0FDL0U7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPO0lBQ2IsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDIn0=