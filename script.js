

let checkButton = document.getElementById("checkButton");
let textPreview = document.getElementsByTagName("h1")[0];

checkButton.addEventListener("click",calculating);


function calculating (){
  let inputValue = document.getElementById("numberInput").value;
  let Numbers = inputValue.split("");
  let result = [];
  for (let index = 0; index <= Numbers.length; index++) {
    if (Numbers[index]==="5") {
      result.push("Fizz");console.log("5");
    }
  if (Numbers[index]==="7") {
      result.push("Buzz");console.log("7");
    }
  } 

if (inputValue%5===0) {
  result.push("Fizz");console.log("5/0");
} 
if (inputValue%7===0) {
  result.push("Buzz");console.log("7/0");
} 

textPreview.innerHTML = result.toString();

document.getElementById("numberInput").value = parseInt(inputValue)+1;

}
