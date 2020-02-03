let bankAmount=0;
let moneyEarn=0;
let nameValue=JSON.parse(localStorage.getItem("playerName"));
let welcome=document.querySelector("#player");
welcome.innerHTML="Welcome "+nameValue+" ";
let bankValue=document.querySelector("#bankButton");
class Question
{
  constructor(qN,oA,oB,oC,oD,oE,oF,cA)
    {
        this.questionName = qN;
        this.optionA=oA;
        this.optionB=oB;
        this.optionC=oC;
        this.optionD=oD;
        this.optionE=oE;
        this.optionF=oF;
        this.correctAnswer=cA;
    }
}
const questions=[];
questions.push(new Question("How to say hello in Chinese?","Hoho","Anjoasaio","Bonjour","Nihao","Wo shou","Hi","Nihao"));
questions.push(new Question("Which country has the most people in the world?","India","China","USA","Canada","Korea","Singapore","China"));
questions.push(new Question("Berlin is the capital of which country?","India","Germany","USA","Canada","China","Horea","Germany"));
questions.push(new Question("Which country is the smallest in the world?","Vatican City","Beijing","Tokyo","Hawaii","Shanghai","Toronto","Vatican City"));
questions.push(new Question("What does DNA stand for?","Dumb and Anoying","Deoxyribonucleic acid","Do and Ace","No meaning","Heredity","Child","Deoxyribonucleic acid"));
questions.push(new Question("What does RNA stand for?","Ribonucleic acid","Random A","Run and avoid","No meaning","Kids","Heredity","Ribonucleic acid"));
questions.push(new Question("What does E.coli means?","Washingm machine","A virus","A bacteria","A spaceship","No meaning","Simply","A bacteria"));
questions.push(new Question("What is the speed of light?","299 792 458 m / s","999 792 458 m / h","299 000 458 m / s","299 792 458 m / h","123 489 897 m / h","456 158 753 m / s","299 792 458 m / s"));
questions.push(new Question("What is the formula of gravity?","a*b","x/y","mc^2","PI*r^2","A*B","Mp3","mc^2"));
questions.push(new Question("Old Mcdonald had a what?","Computer","Friend","Idea","Farm","Mall","House","Farm"));
questions.push(new Question("1+4=?","2","6","7","5","8","12","5"));
questions.push(new Question("3+3=?","2","1","72","15","8","6","6"));
questions.push(new Question("15+4=?","23","26","7","5","19","12","19"));
questions.push(new Question("Why are you studying English?","For work.","I run my own business","I love learning new languages.","I need it.","I work in a bank","My mom require me","I love learning new languages."));
questions.push(new Question("What do you do?","Student","Teacher","Farmer","Clerk","Book seller","Author","Student"));
questions.push(new Question("How did you learn english?","I took classes for three years.","Reading english book","I did an intensive course.","I’ve been studying on my own."," I learn from my frind","I picked it up from movies and songs.","I took classes for three years."));
questions.push(new Question("1+8=?","7","8","9","5","18","12","9"));
questions.push(new Question("3+6=?","9","6","72","15","8","6","9"));
questions.push(new Question("15+14=?","23","26","17","5","29","12","29"));
let correct;
let randomIndex;
function selectQuestion()
{ const saveRadomQuestion=[];
  randomIndex= Math.floor(Math.random()*questions.length); 
  saveRadomQuestion.push(questions[randomIndex].questionName);
  saveRadomQuestion.push(questions[randomIndex].optionA);
  saveRadomQuestion.push(questions[randomIndex].optionB);
  saveRadomQuestion.push(questions[randomIndex].optionC);
  saveRadomQuestion.push(questions[randomIndex].optionD);
  saveRadomQuestion.push(questions[randomIndex].optionE);
  saveRadomQuestion.push(questions[randomIndex].optionF);
  correct=questions[randomIndex].correctAnswer;
  let n=2;
  while(n > 0)
  {
  newRandomIndex= Math.floor(Math.random()*saveRadomQuestion.length);
  if (newRandomIndex == 1 && saveRadomQuestion[newRandomIndex] != questions[randomIndex].correctAnswer)
  {
     saveRadomQuestion.splice(1,1);
     n--;
  }
  else 
  {
    if(newRandomIndex == 2 && saveRadomQuestion[newRandomIndex] != questions[randomIndex].correctAnswer)
      {  
        saveRadomQuestion.splice(2,1);
        n--;
      }
      else 
      {
        if(newRandomIndex == 3 && saveRadomQuestion[newRandomIndex] != questions[randomIndex].correctAnswer)
          {
            saveRadomQuestion.splice(3,1);
            n--;
          }
          else 
          {
            if(newRandomIndex == 4 && saveRadomQuestion[newRandomIndex] != questions[randomIndex].correctAnswer)
                {        
                  saveRadomQuestion.splice(4,1);
                  n--;
                }
                else 
                {
                  if(newRandomIndex == 5 && saveRadomQuestion[newRandomIndex] != questions[randomIndex].correctAnswer)
                      {
                       saveRadomQuestion.splice(5,1);                   
                       n--;
                      }
                      else 
                      {
                        if(newRandomIndex == 6 && saveRadomQuestion[newRandomIndex] != questions[randomIndex].correctAnswer)
                          {
                           saveRadomQuestion.splice(6,1);
                           n--;                    
                          }
                      }
                }
          }
      }
  }
  }

  let radomQuestion=document.querySelector("#question");
  radomQuestion.innerHTML=saveRadomQuestion[0];
  let optionA=document.querySelector("#optionA");
  optionA.innerHTML=saveRadomQuestion[1];
  let optionB=document.querySelector("#optionB");
  optionB.innerHTML=saveRadomQuestion[2];
  let optionC=document.querySelector("#optionC");
  optionC.innerHTML=saveRadomQuestion[3];
  let optionD=document.querySelector("#optionD");
  optionD.innerHTML=saveRadomQuestion[4];
questions.splice(randomIndex,1);
}
let i=1;
let answer;
selectQuestion();
optionA.addEventListener("click",optionAA);
optionB.addEventListener("click",optionBB);
optionC.addEventListener("click",optionCC);
optionD.addEventListener("click",optionDD);
function optionAA()
{
  checkAnswer(optionA.innerHTML);
  changeTree();
}

function optionBB()
{
  checkAnswer(optionB.innerHTML);
  changeTree();
}
function optionCC()
{
  checkAnswer(optionC.innerHTML);
  changeTree();
}
function optionDD()
{
  checkAnswer(optionD.innerHTML);
  changeTree();
}

function checkAnswer(option)
{

if(option==correct)
{
   
  answer =true;
}
else
{
 
  answer =false;
}
}
let moneyTree=[];
let value1_0=document.querySelector("#value1_0");
let value1_1000=document.querySelector("#value1_1000");
let value1_5000=document.querySelector("#value1_5000");
let value1_10000=document.querySelector("#value1_10000");
let value1_50000=document.querySelector("#value1_50000");
let value1_75000=document.querySelector("#value1_75000");
let value1_125000=document.querySelector("#value1_125000");
let value1_250000=document.querySelector("#value1_250000");
let value1_500000=document.querySelector("#value1_500000");
moneyTree.push(value1_0);
moneyTree.push(value1_1000);
moneyTree.push(value1_5000);
moneyTree.push(value1_10000);
moneyTree.push(value1_50000);
moneyTree.push(value1_75000);
moneyTree.push(value1_125000);
moneyTree.push(value1_250000);
moneyTree.push(value1_500000);

//pictures no color
const gMoney1=[];
gMoney1.push("../img/GMoney/GMoney-0.png");
gMoney1.push("../img/GMoney/GMoney-1000.png");
gMoney1.push("../img/GMoney/GMoney-5000.png");
gMoney1.push("../img/GMoney/GMoney-10000.png");
gMoney1.push("../img/GMoney/GMoney-50000.png");
gMoney1.push("../img/GMoney/GMoney-75000.png");
gMoney1.push("../img/GMoney/GMoney-125000.png");
gMoney1.push("../img/GMoney/GMoney-250000.png");
gMoney1.push("../img/GMoney/GMoney-500000.png");

//pictures have color
const yMoney1=[];
yMoney1.push("../img/YMoney/YMoney-0.png");
yMoney1.push("../img/YMoney/YMoney-1000.png");
yMoney1.push("../img/YMoney/YMoney-5000.png");
yMoney1.push("../img/YMoney/YMoney-10000.png");
yMoney1.push("../img/YMoney/YMoney-50000.png");
yMoney1.push("../img/YMoney/YMoney-75000.png");
yMoney1.push("../img/YMoney/YMoney-125000.png");
yMoney1.push("../img/YMoney/YMoney-250000.png");
yMoney1.push("../img/YMoney/YMoney-500000.png");


let bank=document.querySelector("#bank");

const moneyTreeValue1=[0,1000,5000,10000,50000,75000,125000,250000,500000];
let time=document.querySelector("#timer");
let value=parseInt(time.innerHTML);
let interval=setInterval(timeChange,1000);
function timeChange()
  {
    
    value-=1;
    time.innerHTML=value;
    if(value==0)
    {
    clearInterval(interval);
    location.href="../html/Round2.html";//when clearInterval, automatic to next page,round2
    }
  }
          function changeTree()
          {  
          if(bankAmount<500000)
          {
            if(answer==true)
            {     
             moneyTree[i].src=yMoney1[i];
             moneyTree[i-1].src=gMoney1[i-1];
             moneyEarn=moneyTreeValue1[i];
             i++;
            selectQuestion(); 
            }
           else if(answer==false)
                {
               moneyTree[i-1].src=gMoney1[i-1];
               moneyEarn=0;
               i=1;
               selectQuestion();
                }
             }
             else
             {
               location.href="../html/Round2.html";
             }
          }
      localStorage.setItem("bankRound1",JSON.stringify(bankAmount));    
      bank.addEventListener("click",function(){
      bankAmount+=moneyEarn;
      for(b=0;b<9;b++)
      {
        moneyTree[b].src=gMoney1[b];
      }
      moneyEarn=0;
      i=1;
      bankValue.innerHTML="Balance: "+bankAmount;
      localStorage.setItem("bankRound1",JSON.stringify(bankAmount));
      if(bankAmount>=500000)
      {
        bankAmount=500000;
        bankValue.innerHTML="Balance: "+bankAmount;
        localStorage.setItem("bankRound1",JSON.stringify(bankAmount));
        location.href="../html/Round2.html";
      }
      });
   
 
  
  






