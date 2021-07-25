// Declaring variables for each IDS
var counterPlaceHolder = document.getElementById("counter-placeholder");
var buttonIncrement = document.getElementById("increment");
var buttonDecrement = document.getElementById("decrement");

var number = 0;

buttonIncrement.addEventListener("click", function(){
    number++;
    counterPlaceHolder.innerHTML = number;
});

buttonDecrement.addEventListener("click", function(){
    if(number >= 1){
      return counterPlaceHolder.innerHTML = number--;
    } else{
      return counterPlaceHolder.innerHTML = number;
    }
});
