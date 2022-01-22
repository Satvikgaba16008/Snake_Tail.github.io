let inputDir ={x:0, y:0};
let speed =10;         ;
let score=0;
let lastPaintTime = 0;
let snakeArr = [
    
    {x:13 , y:15}
]

food =   {x:6 , y:7}
//game functions
if(score > 10) {
    speed +=20;
}

function main (ctime) {

  window.requestAnimationFrame(main)
//     console.log(ctime);
if((ctime - lastPaintTime)/1000 < 1/speed) {

    return;
}
lastPaintTime=ctime;
gameEngine()
}
 
function isCollide(snake) {
    // IF YOU BUMP INTO YYOUR YOURSELF THEN WHAT WILL HAPPEN 
for (let i = 1; i < snakeArr.length; i++) {
    if(snake[i].x === snake[0].x  && snake[i].y === snake[0].y ) {
        return true;
    } } 
    // if you bump into the wall
      if(snakeArr[0].x >= 22 ||   snakeArr[0].x <= 0  || snakeArr[0].y >= 22 ||   snakeArr[0].y <= 0) {
 return true;  


 }

}


function gameEngine() {

    //  part 1 updating tthe snake array and the food
if(isCollide(snakeArr)) {

    inputDir = {x:0, y:0 };
    alert("press any key to play again !!");
    snakeArr = [{x:13 , y:15}];
    score=0;
}

// if you havce eaten the food and increment in the food and regenaration of the food 
if(snakeArr[0].y ===  food.y && snakeArr[0].x === food.x) {
 score += 1;
 scoreBox.innerHTML = "Score  :  " + score;
  if(score > hiscore) {
      hiscoreval  = score;
      localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
      hiscoreBox.innerHTML = "HIGH SCORE : " + hiscoreval ;
      }
     snakeArr.unshift({  x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y}); 
let a= 2;
let b= 16;

    food ={x: Math.round(a + (b - a)* Math.random()) , y: Math.round(a + (b - a)* Math.random())}
}


// moving the snake 

for (let i = snakeArr.length - 2; i >=0 ; i--) {
    
    snakeArr[i+1] = {...snakeArr[i]}
    
}


snakeArr[0].x +=inputDir.x;
snakeArr[0].y +=inputDir.y;
    // part 2 
    // display the snake 
    board.innerHTML = "";
    snakeArr.forEach((e,index)=> {
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart =e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add('snake')
    if(index==0) {

        snakeElement.classList.add('head')
    }
    else {
        snakeElement.classList.add('snake')
    }
    board.appendChild(snakeElement);
    });

    // display the food 

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart =food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}











// game logic

let hiscore= localStorage.getItem("hiscore");
if(hiscore === null ) {
    hiscoreval = 0;
    localStorage.setItem("hiscore" , JSON.stringify(hiscoreval))
}
else {
   hiscoreval = JSON.parse(hiscore);

    hiscoreBox.innerHTML = "High Score : " + hiscore;
}
window.requestAnimationFrame(main)
window.addEventListener('keydown', e => {

    inputDir = {x: 0 , y:1 } // star the game 

    switch (e.key) {
        case "w":
           console.log("ArrowUp"); 
           inputDir.x=0;
           inputDir.y=-1;
            break; 
            case "As":
                console.log("ArrowDown"); 
                inputDir.x=0;
                inputDir.y=1;
            break;
            case "a":
                console.log("ArrowLeft"); 
                inputDir.x=-1;
                inputDir.y=0;
            break;
            case "d":
                console.log("ArrowRight");
                inputDir.x=1;
                inputDir.y=0; 
            break;
            
    
        default:
            break;
    }
})