const dispalyBox = document.getElementById("dispalyBox");

function appendToDisplay(input){
    dispalyBox.value += input;
}
dispalyBox.disabled = true;

function clearDisplay(){
    dispalyBox.value = "";
}

function answer(){
dispalyBox.value = eval(dispalyBox.value);
}
