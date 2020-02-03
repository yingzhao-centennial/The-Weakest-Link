let bankAmount=parseInt(JSON.parse(localStorage.getItem("bankRound1")));
let name=JSON.parse(localStorage.getItem("playerName"));
let result=document.querySelector("#result");
result.innerHTML="Congratulations "+name+","+" you have earn "+bankAmount+" dollars! ";
