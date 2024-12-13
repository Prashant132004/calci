let display=document.getElementById("store");
let numbers=document.querySelectorAll(".num button");
let operators=document.querySelectorAll(".operators button");
let equals=document.getElementById("equals");
let clear=document.getElementById("clear");


numbers.forEach(button =>{
  button.addEventListener("click",()=>{
    appendToDisplay(button.textContent);
  });
});
operators.forEach(button =>{
  button.addEventListener("click",()=>{
    appendToDisplay(button.getAttribute("data-value"));
  });
});


function appendToDisplay(value){
  display.value  += value;
}

equals.addEventListener("click",()=>{
  try{
    display.value=eval(display.value);
  }catch(error){
    display.value="error";
  }
});

clear.addEventListener("click",()=>{
  display.value=" ";

});