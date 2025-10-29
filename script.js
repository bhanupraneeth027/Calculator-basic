const display = document.querySelector("#display");
function addtodisplay(input){
  display.value += input;
}
function cleardisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}