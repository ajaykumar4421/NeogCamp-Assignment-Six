var txtInput = document.querySelector("#textarea");
var btntranslate = document.querySelector("#click-translate");
var btnOutput = document.querySelector("#btn-output");


btntranslate.addEventListener("click",function getServerUrl(){
    serverUrl = "https://api.funtranslations.com/translate/minion.json";
    var inputTranslate = serverUrl +"?"+"text="+txtInput.value;
    fetch(inputTranslate)
    .then(response => response.json())
    .then( out => {btnOutput.innerText = out.contents.translated})
});
