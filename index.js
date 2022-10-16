let numOne = document.getElementById("num-one");
let numTwo = document.getElementById("num-two");
let addSum = document.getElementById("add-sum");

//events: click, mouseenter, mouseleave, mousedown, mouseup,
// mousemove, keydown, keyup, focus, blur, input
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
    function add() {
let one = parseFloat(numOne.value) || 0;
let two = parseFloat(numTwo.value) || 0;
addSum.innerHTML = "your sum is:  " + (one + two);
    };


