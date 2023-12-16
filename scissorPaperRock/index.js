let reslt= document.querySelector('.results');
let winAmt= document.querySelector('.winAmount');

let countIs ={
     win : 0,
     lose : 0,
     tie : 0
};

function printIt(){
    console.log(`win ${countIs.win} lose: ${countIs.lose} Tie : ${countIs.tie}`);
    winAmt.innerHTML= `Win: ${countIs.win} Lose: ${countIs.lose} Tie : ${countIs.tie}`;
}

function random(){
let eg= Math.random();
if (eg>=0 && eg <1/3)
    compIs = 'rock';
else if (eg>=1/3 && eg <2/3)
    compIs = 'paper';
else if (eg>=1/6 && eg <=1)
    compIs = 'scissor';
console.log('Computer : ' + compIs);
}

function passIt(human){
    let wn='Tie';
    document.querySelector('.whoWhat').innerHTML=`computer : <img src="images/${compIs}-emoji.png" class="button-emoji">  <img src="images/${human}-emoji.png" class="button-emoji"> :  Human `;
    console.log('Human is:'+ human)
    if (human==compIs)
       { console.log("Haha same!!");
       countIs.tie++;
       reslt.classList.add('tieResult');
       reslt.classList.remove('winResult');
       reslt.classList.remove('loseResult');
       printIt();

        }
    else if(human=='rock') {
        if (compIs=='paper'){
            console.log('Yes comp is legend');
            countIs.lose++;
            printIt();
            wn=1;
             }
        else{
            console.log('Human is legend');
            countIs.win++;
            printIt();
            wn=2;
             }
    }
    else if(human=='paper') {
        if (compIs=='rock'){
            console.log('Human is legend');
            countIs.win++;
            printIt();
            wn=2;
             }
        else{
            console.log('Yes comp is legend');
            countIs.lose++;
            printIt();
            wn=1;
             }
    }
    else if(human=='scissor') {
        if (compIs=='paper'){
            console.log('Human is legend');
            countIs.win++;
            printIt();
            wn=2;
             }
        else{
            console.log('Yes comp is legend');
            countIs.lose++;
            printIt();
            wn=1;
             }
    }
    if (wn===1)
       { wn='Computer Wins';
        reslt.classList.add('loseResult');
        reslt.classList.remove('winResult');
        reslt.classList.remove('tieResult');
        }
    else if(wn===2)
       { wn='Human Wins';
       reslt.classList.add('winResult');
       reslt.classList.remove('loseResult');
       reslt.classList.remove('tieResult');
    }
    // else 
    //     wn='Tie';
    reslt.innerHTML= `${wn}`;
}

function resetAll(){
    countIs.win=0;
    countIs.lose=0;
    countIs.tie=0;
    console.log('resetted');
    printIt();
}
