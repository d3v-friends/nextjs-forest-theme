import { jsx as _jsx } from "react/jsx-runtime";
import { getAsideStatus } from "./config.js";
import Cont from "./cont.js";
export default async function (props) {
    const asideStatus = await getAsideStatus();
    return (_jsx(Cont, Object.assign({}, props, { initStatus: asideStatus })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvYXNpZGUtbmF2L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUFtQjFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEtBQStCO0lBQzdELE1BQU0sV0FBVyxHQUFHLE1BQU0sY0FBYyxFQUFFLENBQUM7SUFFM0MsT0FBTyxDQUNOLEtBQUMsSUFBSSxvQkFDQSxLQUFLLElBQ1QsVUFBVSxFQUFFLFdBQVcsSUFDdEIsQ0FDRixDQUFDO0FBQ0gsQ0FBQyJ9