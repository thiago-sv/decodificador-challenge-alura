
var botaoCriptografar = document.querySelector(".btCriptografar");
var botaoDecriptografar = document.querySelector(".btDecriptografar");

botaoCriptografar.addEventListener("click", function (event) {

  var textoForm = document.querySelector(".texto");

  var textoResultante = document.getElementById("texto-resultante");

  if (textoForm.value != "") {
    document.getElementById("info-aside").style.display = "none";
    textoResultante.innerHTML = criptografaMensagem(textoForm.value);
    textoResultante.style.display = "inline";
  }
});

botaoDecriptografar.addEventListener("click", function (event) {

  var textoForm = document.querySelector(".texto");

  var textoResultante = document.getElementById("texto-resultante");
  if (textoForm.value != "") {
    document.getElementById("info-aside").style.display = "none";
    textoResultante.innerHTML = decriptografaMensagem(textoForm.value);
    textoResultante.style.display = "inline";
  }
});

function criptografaMensagem(textoCriptografar) {

  return textoCriptografar.replace(/[e]/gi, 'enter').replace(/[i]/gi, 'imes').replace(/[a]/gi, 'ai').replace(/[o]/gi, 'ober').replace(/[u]/gi, 'ufat');;
}


function decriptografaMensagem(textoDecriptografar) {
  return textoDecriptografar.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
}

function copiar() {
  var copyText = document.querySelector("#texto-resultante");
  navigator.clipboard.writeText(copyText.innerHTML);
}

function limpar() {

  var cleanText = document.querySelector("#texto-resultante");
  cleanText.innerHTML = "";
  cleanText.style.display = "none";
  document.getElementById("info-aside").style.display = "block";

}




