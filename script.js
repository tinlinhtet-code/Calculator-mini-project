const dispalyBox = document.getElementById("dispalyBox");

function appendToDisplay(input){
    dispalyBox.value += input;
}

function clearDisplay(){
    dispalyBox.value = "";
}

function calculate(){
    dispalyBox.value = eval(dispalyBox.value);
}
