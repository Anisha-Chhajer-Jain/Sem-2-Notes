import add from "../add.js"
import subtract from "./subtract.js"
import multiple from "./multiple.js"
import divide from "./divide.js"


export function cal(a, b){
add(a, b);
subtract(a, b);
multiple(a, b);
console.log(divide(a, b));
}