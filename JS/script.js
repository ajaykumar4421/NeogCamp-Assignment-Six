var txtInput = document.querySelector("#textarea");
var btntranslate = document.querySelector("#click-translate");
var btnClear = document.querySelector("#clear-translate");
var btnOutput = document.querySelector("#btn-output");


btntranslate.addEventListener("click",function getServerUrl(){
    serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var inputTranslate = serverUrl +"?"+"text="+txtInput.value;
    fetch(inputTranslate)
    .then(response => response.json())
    .then( out => {btnOutput.innerText = out.contents.translated})
});

btnClear.addEventListener("click",function clearEventHandler(){
    btnOutput.innerText = '';
});
