let guessed1 = 0;
let missed = 0;
let nrGame = 0;

const canvas = document.getElementById("spanzuratoarea");
const ctx = canvas.getContext('2d');

var word = document.getElementById("toBeGuessed").value;

function newGame(){

++nrGame;

const canvas = document.getElementById("spanzuratoarea");
const ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, canvas.width, canvas.height);
var word = document.getElementById("toBeGuessed").value;

document.getElementById("toBeGuessed").value = null;
document.getElementById("toBeGuessed").style.display = "";



ctx.strokeStyle = 'brown';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(700, 200);
ctx.lineTo(800, 200);
ctx.moveTo(750, 200);
ctx.lineTo(750, 5);
ctx.lineTo(835,5);
ctx.lineTo(835, 30);
ctx.stroke();
}

function addWord(){
    var word = document.getElementById("toBeGuessed").value;
    let y = 10;
    let size = word.length;

    document.getElementById("toBeGuessed").style.display = "none";

    while(size > 0){
      drawLines(y);
      y += 50;
      --size;
    }
}

function drawLines(x){
      ctx.strokeStyle = 'brown';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(x, 420);
      ctx.lineTo(x + 30, 420);
      ctx.stroke();
}

function addLetter(){
 let letter = document.getElementById("letterToBeGuessed").value;
 let size1 = 0;
 let y = 10;
 let guessed = 0
 let word = document.getElementById("toBeGuessed").value;

 while(size1 < word.length){
    if(letter === word[size1]){
      document.getElementById("nextLetter").innerHTML = "nailed it";
      ctx.fillStyle = 'red';
      ctx.font = '80px serif';
      ctx.fillText(letter, y, 415, 50);
      ++guessed;
      ++guessed1;
    }
    y += 50;
    ++size1;
 }
 if(guessed1 === word.length && guessed1 !== 0 ){
  ctx.fillStyle = 'green';
  ctx.font = '48px serif';
  ctx.fillText('ALIVE AND WINNER', 450, 250, 150);
  guessed1 = 0;
  missed = 0;
  document.getElementById("nextLetter").innerHTML = "";
}
 if(guessed === 0){
  ++missed;
  document.getElementById("nextLetter").innerHTML = "drawing..."
  drawHangman();
}
document.getElementById("letterToBeGuessed").value = null;
}

function drawHangman(){
  let word = document.getElementById("toBeGuessed").value;

 if(missed === word.length){
    drawTheHangMan();
    missed = 0;
    guessed1 = 0;
    document.getElementById("nextLetter").innerHTML = "";
  }else{
  if(missed === 1 ){
    drawHead();
  }
  if (missed === 2){    
    drawBody();
  }
  if(missed === 3){ 
    drawLeftHand();
  } 
  if(missed === 4){
    drawRightHand();
  }    
  if(missed === 5){
    drawLeftFoot();
  }
  if(missed === 6 || missed === word.length){ 
    drawRightFoot();
    missed = 0;
    guessed1 = 0;
    document.getElementById("nextLetter").innerHTML = "";
  }
} 
}


function drawHead(){ 
  ctx.strokeStyle = 'brown';   
  ctx.beginPath();
  ctx.arc(835, 50, 20, 0, Math.PI*2, true);
  ctx.stroke();
}
function drawBody(){  
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 10;  
  ctx.beginPath();
  ctx.moveTo(835, 70);
  ctx.lineTo(835, 150);
  ctx.stroke();
}
function drawLeftHand(){
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 10; 
  ctx.beginPath(); 
  ctx.moveTo(835, 90);
  ctx.lineTo(815, 120);
  ctx.stroke();
} 
function drawRightHand(){
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 10; 
  ctx.beginPath(); 
  ctx.moveTo(835, 90);
  ctx.lineTo(855, 120);
  ctx.stroke();
}    
function drawLeftFoot(){
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 10; 
  ctx.beginPath();   
  ctx.moveTo(835, 149);
  ctx.lineTo(815, 169);
  ctx.stroke();
}
function drawRightFoot(){ 
  ctx.strokeStyle = 'brown';
  ctx.lineWidth = 10;
  ctx.beginPath();     
  ctx.moveTo(835, 149);
  ctx.lineTo(855, 169);
  ctx.stroke();
  ctx.fillStyle = 'green';
  ctx.font = '48px serif';
  ctx.fillText('DEAD', 450, 250, 150);
}

function drawTheHangMan(){ 
  ctx.strokeStyle = 'brown'; 
  ctx.lineWidth = 10;  
  ctx.beginPath();
  ctx.arc(835, 50, 20, 0, Math.PI*2, true);
  ctx.stroke();  
  ctx.beginPath();
  ctx.moveTo(835, 70);
  ctx.lineTo(835, 150);
  ctx.stroke(); 
  ctx.beginPath(); 
  ctx.moveTo(835, 90);
  ctx.lineTo(815, 120);
  ctx.stroke(); 
  ctx.beginPath(); 
  ctx.moveTo(835, 90);
  ctx.lineTo(855, 120);
  ctx.stroke()
  ctx.beginPath();   
  ctx.moveTo(835, 149);
  ctx.lineTo(815, 169);
  ctx.stroke();
  ctx.beginPath();     
  ctx.moveTo(835, 149);
  ctx.lineTo(855, 169);
  ctx.stroke();
  ctx.fillStyle = 'green';
  ctx.font = '48px serif';
  ctx.fillText('DEAD', 450, 250, 150);
}