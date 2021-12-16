window.addEventListener("load",function(){
// DOM-lar
const user1=document.querySelector("#user1");
const scor1=document.querySelector("#scor1");
const user2=document.querySelector("#user2");
const scor2=document.querySelector("#scor2");
const timer=document.querySelector("#timer");
const game=document.querySelectorAll("#game tr td");




// Deyisenler
var T=10;
const x=`<img src="./img/x-icon.png">`;
const o=`<img src="./img/zero-icon.png">`;
var status=true;
var pointer="x";
var interval;



const udmaq=[

[0,1,2],[3,4,5],[6,7,8],
[0,4,8],[2,4,6],
[0,3,6],[1,4,7],[2,5,8],


];


// Start

scor1.innerText=0;
scor2.innerText=0;
user1.innerText=prompt("1-ci oyuncunun adini daxil edin")+"-X";
user2.innerText=prompt("2-ci oyuncunun adini daxil edin")+ "-O";

startGame();










// Click etme

function startGame(){

startTimer();
for(let i=0;i<game.length;i++){
    game[i].innerHTML="";
    game[i].addEventListener("click",function(){
   
        if(status){


            if(game[i].innerHTML==""){
                yaz(game[i]);
                yoxlama();
                bos();
                startTimer();
            }else{
                alert("Xahis edirik bos dama secin");
            }





        }else{

                    let m=window.confirm("Oyun bitib yeniden oynamaq isteyirsenmi?");
                    
                    if(m){

                        reset();


                    }
        }


   
    

   });
}

}

// X ve O -nu yazmaq ucun 

function yaz(DOM){


 
if(pointer=="x"){
    DOM.innerHTML=x;
    pointer="o"
}else{
    DOM.innerHTML=o;
    pointer="x"
}


}


// Yoxlanis uduzmaq ve udmagi

function yoxlama(){

for(let i=0;i<udmaq.length;i++){

    let a=game[udmaq[i][0]].innerHTML;
    let b=game[udmaq[i][1]].innerHTML;
    let c=game[udmaq[i][2]].innerHTML;

    if(a!="" && b!="" && c!=""){


        if(a==b && b==c && c==a){

            status=false;
            xal();
        }


    }
    
}



}


// Xali artirmaq funksiyasi

function xal(){

if(pointer=="x"){

scor2.innerText=parseInt(scor2.innerText)+1;


}else{

scor1.innerText=parseInt(scor1.innerText)+1;

}





}

// Sifirlamaq RESET elemek 

function reset(){

status=true;

for(let i=0;i<game.length;i++){

    game[i].innerHTML="";

}
        startTimer();

}


// Bos yerin qalib qalmadigini yoxlayan funksiya 

function bos(){

let say=game.length;

for(let i=0;i<game.length;i++){

    if(game[i].innerHTML!=""){

        say--;

    }

}

if(say<=0){

status=false;

}





}


// Oyunun timeri zamani

function startTimer(){

    window.clearInterval(interval);
    let t=T;
    interval=window.setInterval(function(){

        if(t>0){

                t--;
                timer.innerText=t;


        }else{

                window.clearInterval(interval);
                status=false;
                alert("Hemle ucun verilen zaman bitdi");
                xal();

        }

                // console.log(1);
    },1000);


}












});