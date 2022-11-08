let guessed1 = 0;
let missed = 0;

const canvas = document.getElementById("spanzuratoarea");
const ctx = canvas.getContext('2d');

var word = document.getElementById("toBeGuessed").value;

ctx.strokeStyle = 'brown';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(700, 300);
ctx.lineTo(800, 300);
ctx.moveTo(750, 300);
ctx.lineTo(750, 50);
ctx.lineTo(835,50);
ctx.lineTo(835, 80);
ctx.stroke();

function addWord(){
    var word = document.getElementById("toBeGuessed").value;
    let y = 50;
    let size = word.length;

    document.getElementById("toBeGuessed").style.display = "none";

    while(size > 0){
      drawLines(y);
      y += 80;
      --size;
    }
}

function drawLines(x){
      ctx.strokeStyle = 'brown';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(x, 300);
      ctx.lineTo(x + 50, 300);
      ctx.stroke();
}

function addLetter(){
 let letter = document.getElementById("letterToBeGuessed").value;
 let size = 0;
 let y = 50;
 let guessed = 0
 var word = document.getElementById("toBeGuessed").value;

 while(size < word.length){
    if(letter === word[size]){
      document.getElementById("nextLetter").innerHTML = "nailed it";
      ctx.fillStyle = 'red';
      ctx.font = '80px serif';
      ctx.fillText(letter, y, 295, 100);
      ++guessed;
      ++guessed1;
    }
    y += 80;
    ++size;
 }
 if(guessed1 === word.length && guessed1 !== 0 ){
  ctx.fillStyle = 'green';
  ctx.font = '48px serif';
  ctx.fillText('ALIVE AND WINNER', 450, 250, 150);
}
 if(guessed === 0){
  ++missed;
  document.getElementById("nextLetter").innerHTML = "drawing..."
  drawHangman(missed);
}
}

function drawHangman(x){
  ctx.strokeStyle = 'brown';
  if(x === 1){
    ctx.beginPath();
    ctx.arc(835, 100, 20, 0, Math.PI*2, true);
    ctx.stroke();
  }
  if (x === 2){    
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10;  
    ctx.beginPath();
    ctx.moveTo(835, 120);
    ctx.lineTo(835, 200);
    ctx.stroke();
  }
  if(x === 3){ 
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10; 
    ctx.beginPath(); 
    ctx.moveTo(835, 140);
    ctx.lineTo(815, 160);
    ctx.stroke();
  } 
  if(x === 4){
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10; 
    ctx.beginPath(); 
    ctx.moveTo(835, 140);
    ctx.lineTo(855, 160);
    ctx.stroke();
  }    
  if(x === 5){
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10; 
    ctx.beginPath();   
    ctx.moveTo(835, 200);
    ctx.lineTo(815, 220);
    ctx.stroke();
  }
  if(x === 6){ 
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 10;
    ctx.beginPath();     
    ctx.moveTo(835, 200);
    ctx.lineTo(855, 220);
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.font = '48px serif';
    ctx.fillText('DEAD', 450, 250, 150);
  }
} 




   