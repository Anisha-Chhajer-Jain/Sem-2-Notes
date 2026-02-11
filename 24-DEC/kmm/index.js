import { calculate } from "./data.js";

var button = document.querySelector('.btn');
var input = document.querySelector('.ip1');

button.addEventListener('click',()=>{
    calculate(Number(input.value));
})

