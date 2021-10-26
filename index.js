var btnClicked = document.querySelector("#btn-click");
var inputText = document.querySelector("#textarea");
var outputText = document.querySelector(".outputText");

const errorHandler = () =>{
    console.log("erro ocuured",errro);
}

const clickHandler = () => {
    var serverUrl = "https://api.funtranslations.com/translate/minion.json"+"?"+"text="+inputText.value;
    fetch(serverUrl).then(res => res.json()).then(json => {
        outputText.innerText = json.contents.translated;
    })
    .catch(errorHandler)
    console.log(serverUrl)
    console.log('reached');
}


btnClicked.addEventListener('click',clickHandler);
