export function getSorter(str) {
    switch (str.toLowerCase()) {
        case "asc":
            return "asc";
        case "desc":
            return "desc";
        default:
            return "none";
    }
}
export function toggleSort(v) {
    switch (v) {
        case "asc":
            return "desc";
        case "desc":
            return "none";
        case "none":
            return "asc";
        default:
            return "asc";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcC90YWJsZS90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFXO0lBQ3BDLFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDM0IsS0FBSyxLQUFLO1lBQ1QsT0FBTyxLQUFLLENBQUM7UUFDZCxLQUFLLE1BQU07WUFDVixPQUFPLE1BQU0sQ0FBQztRQUNmO1lBQ0MsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNGLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLENBQVk7SUFDdEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNYLEtBQUssS0FBSztZQUNULE9BQU8sTUFBTSxDQUFDO1FBQ2YsS0FBSyxNQUFNO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDZixLQUFLLE1BQU07WUFDVixPQUFPLEtBQUssQ0FBQztRQUNkO1lBQ0MsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0YsQ0FBQyJ9