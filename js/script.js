

// viewrules 
let viewrule=document.querySelector("#viewrules");
let rulelink=document.querySelector("#rulelink");
viewrule.addEventListener("click",Displayrule);
function Displayrule()
{
 rulelink.href="html/rule.html";
}
let playbutton=document.querySelector("#playbutton");
let startlink=document.querySelector("#startlink");
playbutton.addEventListener("click",AskNameAge);
function AskNameAge()
{
 let name = prompt("Please enter your name:  ");
 localStorage.setItem("playerName",JSON.stringify(name));
 let age = prompt("Please enter your age:  ");
 startlink.href="html/Round1.html";
}
