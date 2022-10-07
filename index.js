function DeleteMe() {
    document.getElementById("My-Result").value = "";
}
function Calculator(VarValue) {
    document.getElementById("My-Result").value += VarValue;
    

}
function Answer(){
    var a = document.getElementById("My-Result").value ;
    var b = eval(a);
    document.getElementById("My-Result").value = b;

}