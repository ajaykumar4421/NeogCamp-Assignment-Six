var txtInput = document.querySelector("#textarea");
var btntranslate = document.querySelector("#click-translate");
var btnOutput = document.querySelector("#btn-output");


btntranslate.addEventListener("click",function callEventHanadler(){
   btnOutput.innerText = txtInput.value;
   
});
