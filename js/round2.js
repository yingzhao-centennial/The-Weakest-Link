let bankAmount=parseInt(JSON.parse(localStorage.getItem("bankRound1")));
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
questions.push(new Question("2*99=?","134","256","198","478","890","1000","198"));
questions.push(new Question("What can javascript do?","Cooking","Make webpage more functional","Build a house","Cure illness","Make interface","Easy read","Make webpage more functional"));
questions.push(new Question("Who is the professor of javasript?","Patrick","Omari","Yamin","Kateem","Tom","Jason","Kateem"));
questions.push(new Question("Who is the CEO of facebook?","Tom","Bill Gates","George Washington","Mark Zuckerberg","Jason","Ming","Mark Zuckerberg"));
questions.push(new Question("First month of the year is?","December","Janurary","February","July","April","March","Janurary"));
questions.push(new Question("Which country is the biggest in the world?","China","Russia","USA","Canada","India","Korea","Russia"));
questions.push(new Question("Which continent has the least people lived there?","Asia","Africa","Europe","Antarctica","Australia","North America","Antarctica"));
questions.push(new Question("Which letter is in the middle of the alphabets?","M","N","A","Z","L","S","A"));
questions.push(new Question("Who invent the first phone?","Bell","Jupiter","Donald Trump","Leonardo","Rogers","Tom","Bell"));
questions.push(new Question("25*3+99=?","999","8399","174","398","1000","250","174"));
questions.push(new Question(" (99+99)/8*(9-9)=?","1234","3988","10","0","56","125","0"));
questions.push(new Question("Which number is a natural number?","-1","3.14","0","1","5.6","-3","1"));
questions.push(new Question("How to say hello in French?","Hoho","Anjoasaio","Bonjour","Nihao","Hi","Wo shou","Bonjour"));
questions.push(new Question("1+1=?","1","2","3","4","5","6","2"));
questions.push(new Question("29-30=?","1","2","-1","3","4","5","-1"));
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


let moneyTree2=[];
let value2_0=document.querySelector("#value2_0");
let value2_1000=document.querySelector("#value2_1000");
let value2_10000=document.querySelector("#value2_10000");
let value2_75000=document.querySelector("#value2_75000");
let value2_125000=document.querySelector("#value2_125000");
let value2_500000=document.querySelector("#value2_500000");
moneyTree2.push(value2_0);
moneyTree2.push(value2_1000);
moneyTree2.push(value2_10000);
moneyTree2.push(value2_75000);
moneyTree2.push(value2_125000);
moneyTree2.push(value2_500000);

const gMoney2=[];
gMoney2.push("../img/GMoney/GMoney-0.png");
gMoney2.push("../img/GMoney/GMoney-1000.png");
gMoney2.push("../img/GMoney/GMoney-10000.png");
gMoney2.push("../img/GMoney/GMoney-75000.png");
gMoney2.push("../img/GMoney/GMoney-125000.png");
gMoney2.push("../img/GMoney/GMoney-500000.png");

const yMoney2=[];
yMoney2.push("../img/YMoney/YMoney-0.png");
yMoney2.push("../img/YMoney/YMoney-1000.png");
yMoney2.push("../img/YMoney/YMoney-10000.png");
yMoney2.push("../img/YMoney/YMoney-75000.png");
yMoney2.push("../img/YMoney/YMoney-125000.png");
yMoney2.push("../img/YMoney/YMoney-500000.png");

let bank=document.querySelector("#bank");
let moneyEarn=0;
const moneyTreeValue2=[0,1000,10000,75000,125000,500000];

//Timer
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
    location.href="../html/Round3.html";//when clearInterval, automatic to next page,round3
    }
  }
           function changeTree()
          {  
          if(bankAmount<1000000)
          {
            if(answer==true)
            {     
             moneyTree2[i].src=yMoney2[i];
             moneyTree2[i-1].src=gMoney2[i-1];
             moneyEarn=moneyTreeValue2[i];
             i++;
            selectQuestion(); 
            }
           else if(answer==false)
           {
               moneyTree2[i-1].src=gMoney2[i-1];
               moneyEarn=0;
               i=1;
               selectQuestion();
                }
             }
             else
             {
               location.href="../html/Round3.html";
             }
          }
      localStorage.setItem("bankRound1",JSON.stringify(bankAmount));
      bank.addEventListener("click",function(){
      bankAmount+=moneyEarn;
      for(b=0;b<6;b++)
      {
        moneyTree2[b].src=gMoney2[b];
      }
      moneyEarn=0;
      i=1;
      bankValue.innerHTML="Balance: "+bankAmount;
      localStorage.setItem("bankRound1",JSON.stringify(bankAmount));
      if(bankAmount>=1000000)
      {
        bankAmount=1000000;
        bankValue.innerHTML="Balance: "+bankAmount;
        localStorage.setItem("bankRound1",JSON.stringify(bankAmount));
        location.href="../html/Round3.html";
      }
      });
   
 
  
  