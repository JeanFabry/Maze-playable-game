const body = document.querySelector('body');
body.classList.add('body')

const multiline = `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;

const lineArr = multiline.split("\n");

for (let i=0; i<= lineArr.length-1; i++){
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('lineDiv');
    lineDiv.id=i
    const line =lineArr[i];
    for (let j=0; j<=line.length-1;j++)
    { 
        const characterDiv=document.createElement('div');
        const character= line.split("");
        characterDiv.innerHTML=character[j];
        characterDiv.classList.add('tile');
        lineDiv.appendChild(characterDiv);
        if (characterDiv.innerHTML == "*") {
          characterDiv.classList.add("wall");
          characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == ".") {
          characterDiv.classList.add("path");
          characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "S") {
          characterDiv.classList.add("start");
          characterDiv.innerHTML = "";
        } else if (characterDiv.innerHTML == "T") {
          characterDiv.classList.add("end");
          characterDiv.innerHTML = "";
        }
    }
    body.appendChild(lineDiv)
}

let x = 2;
let y = 1;

let user = document.createElement("div");
user.classList.add('user')
document.querySelector("#\\31  > div.tile.start").appendChild(user);
 
function youWon() {
    if (document
     .querySelector("#\\3" + y + "> div:nth-child(" + x + ")").classList.contains("end")) {
alert("you won !!!! ")
 } 
}

function move(e) {
  if (e.code == "ArrowRight") {
      x++;
      if (document
     .querySelector("#\\3" + y + "> div:nth-child(" + x + ")").classList.contains("wall")) {
         alert("that's a wall!");
         x--;
     }

  } else if (e.code == "ArrowLeft") {
      x--;
      if (document
     .querySelector("#\\3" + y + "> div:nth-child(" + x + ")").classList.contains("wall")) {
         alert("that's a wall!");

         x++;
     }
  } else if (e.code == "ArrowUp") {
       y--;
    if (document
       .querySelector("#\\3" + y + "> div:nth-child(" + x + ")").classList.contains("wall")|| y<0 ) {
         alert("that's a wall!");

         y++;
     }
  } else if (e.code == "ArrowDown") {
      y++;
      if (
        (document
          .querySelector("#\\3" + y + "> div:nth-child(" + x + ")")
          .classList.contains("wall"))){
        alert("that's a wall!");
        y--;
      }
  }
document
       .querySelector("#\\3" + y + "> div:nth-child(" + x + ")")
       .appendChild(user);

document.querySelector("#\\31" + (y-10) + "> div:nth-child("+ x +")");

       youWon();
       
}

body.addEventListener("keydown", move);

