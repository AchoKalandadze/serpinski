// let historyOfChaos=[];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// sizes
let canvasColor = "rgb(35, 224, 231)";
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let maxdots= 5000;
document.getElementById("maxdots").innerHTML = "maxdots: "+maxdots;

// main triangle vertex dots coordinates

let Ax = canvasWidth / 2;
let Ay = canvasHeight / 10;
let Bx = canvasWidth / 10;
let By = (canvasHeight / 10) * 9;
let Cx = (canvasWidth / 10) * 9;
let Cy = (canvasHeight / 10) * 9;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let lastDotX;
let lastDotY;
let vertexX;
let vertexY;
let dotsNum;
//make random point witin triangle

function PointInTriangle(){
    Px=getRandomInt(0,400);
    Py=getRandomInt(0,400);
    let s1 = Cy - Ay;
    let s2 = Cx - Ax;
    let s3 = By - Ay;
    let s4 = Py - Ay;
    let w1 = (Ax * s1 + s4 * s2 - Px * s1) / (s3 * s2 - (Bx-Ax) * s1);
    let w2 = (s4- w1 * s3) / s1;
    if(w1 >= 0 && w2 >= 0 && (w1 + w2) <= 1){
        lastDotX=Px;
        lastDotY=Py;
        makeDot(Px,Py);
        // historyOfChaos.push([Px,Py]);
        // console. log(historyOfChaos);
    } else PointInTriangle();
    
}


function chooseVertex() {
    i = getRandomInt(1, 3);
    if (i == 1) {
        vertexX = Ax;
        vertexY = Ay;
    } else if (i == 2) {
        vertexX = Bx;
        vertexY = By;
    } else {
        vertexX = Cx;
        vertexY = Cy;
    }
}

function makeRect() {
    ctx.beginPath();
    ctx.rect(0, 0, 400, 400);
    ctx.fillStyle = canvasColor;
    ctx.fill();
}
// makeRect();

function makeDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y,0.7, 0, 2 * Math.PI);
    ctx.fillStyle = "black"; // color de las estrellas
    ctx.fill();
    ctx.stroke();
}

// function draw(element){
//     makeRect();
//     let dotss=historyOfChaos.length;
//     document.getElementById("dots").innerHTML = "Dots: " + dotss;
//     historyOfChaos.forEach(element => {
//         makeDot(element[0],element[1]);
//     })
// }


function minus(n){
    let num;
    num=dots-n;
    reset();
    cosmos(num);
    // cosmos(dots);
    // let dotss=historyOfChaos.length;
    // document.getElementById("dots").innerHTML = "Dots:" + dotss;
}

function reset() {
    // historyOfChaos=[];
    // draw();
    dots=0;
    makeRect();
    document.getElementById("dots").innerHTML = "Dots:" + dots;
    animate = false;
}

reset();

function cosmos(n){
    for(let i=0;i<n;i++){
        // let dots=historyOfChaos.length;
        if(dots==0){
            // historyOfChaos.push([Ax,Ay]);
            makeDot(Ax,Ay);
            // dots++;
        } else if(dots==1){
            // historyOfChaos.push([Bx,By]);
            makeDot(Bx,By);
        } else if(dots==2){
            // historyOfChaos.push([Cx,Cy]);
            makeDot(Cx,Cy);
        } else if(dots==3){
            PointInTriangle();
        } else {
            if (dots>maxdots-1){
                return
            }
            chooseVertex();
            // makeDot((lastDotX + vertexX) / 2, (lastDotY + vertexY) / 2);
            // for(i=0; i<hitoryOfChaos.length)
            lastDotX = (lastDotX + vertexX) / 2;
            lastDotY = (lastDotY + vertexY) / 2;
            makeDot(lastDotX,lastDotY);
            // historyOfChaos.push([lastDotX,lastDotY]);
            // console.log(hitoryOfChaos);
            // console.log(historyOfChaos);
        }
        dots++;

        // draw();
        // let dotss=historyOfChaos.length;
        document.getElementById("dots").innerHTML = "Dots:" + dots;
}

}
    // if(n<0){
    //     minus(n);
    // } else {


function start() {
    animate = true;
    animation();
}

function stop() {
    animate = false;
}

function animation() {
    if (!animate) return;
    cosmos(1);
    setTimeout(animation, 3);
}

function getNumberValue() {
    let input = document.getElementById("numberInput").value;
    reset();
    cosmos(input);
    console.log(input);
}

document.getElementById("numberInput").addEventListener("input", getNumberValue);