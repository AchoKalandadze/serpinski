let hitoryOfChaos=[];


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// var dots = 0;
// sizes
let canvasColor = "rgb(35, 224, 231)";
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
// let maxWidth = canvasWidth;
// let maxHeight = canvasHeight;
// let lastDotX;
// let lastDotY;
// let vertexX;
// let vertexY;
let maxdots= 5000;
document.getElementById("maxdots").innerHTML = "maxdots: "+maxdots;



// main triangle vertex dots coordinates
//main
let Ax = canvasWidth / 2;
let Ay = canvasHeight / 10;
let Bx = canvasWidth / 10;
let By = (canvasHeight / 10) * 9;
let Cx = (canvasWidth / 10) * 9;
let Cy = (canvasHeight / 10) * 9;
// let Ax = 100;
// let Ay = 50;
// let Bx = 100;
// let By = 350;
// let Cx = 350;
// let Cy = 350;

// let Ax = canvasWidth / 2;
// let Ay = canvasHeight / 100;
// let Bx = canvasWidth / 23;
// let By = (canvasHeight / 3) * 2;
// let Cx = (canvasWidth / 3) * 2;
// let Cy = (canvasHeight / 3) * 2;
function PointInTriangle(){
    Py=getRandomInt(0,400);
    Px=getRandomInt(0,400);
    let s1 = Cy - Ay;
    let s2 = Cx - Ax;
    let s3 = By - Ay;
    let s4 = Py - Ay;
    let w1 = (Ax * s1 + s4 * s2 - Px * s1) / (s3 * s2 - (Bx-Ax) * s1);
    let w2 = (s4- w1 * s3) / s1;
    if(w1 >= 0 && w2 >= 0 && (w1 + w2) <= 1){
        // makeDot(Px,Py);
        // lastDotX=Px;
        // lastDotY=Py;
        hitoryOfChaos.push([Px,Py,0,0]);
        console. log(hitoryOfChaos);
    } else PointInTriangle();
    
}


function makeDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y,0.7, 0, 2 * Math.PI);
    ctx.fillStyle = "black"; // color de las estrellas
    ctx.fill();
    ctx.stroke();
    // dots++;
    // document.getElementById("dots").innerHTML = "dots:" + dots;
    // ctx.stroke();
}

function cosmosarr(element){
    makeRect();
    hitoryOfChaos.forEach(element => {
        makeDot(element[0],element[1]);
    })
}

function minus(n){
    for (let i = 0; i < n; i++){
        hitoryOfChaos.pop();
    }
    cosmosarr();
}
// maketriangle
// function maketriangle() {
    // makeDot(Ax, Ay);
    // makeDot(Bx, By);
    // makeDot(Cx, Cy);
    // hitoryOfChaos.push([Ax,Ay,0,0]);
    // hitoryOfChaos.push([Bx,By,0,0]);
    // hitoryOfChaos.push([Cx,Cy,0,0]);
    // // console. log(hitoryOfChaos);
    // chaos();
// }

// chaos();


function makeRect() {
    ctx.beginPath();
    ctx.rect(0, 0, 400, 400);
    ctx.fillStyle = canvasColor;
    ctx.fill();
}
function reset() {
    hitoryOfChaos=[];
    // dots = 0;
    makeRect();
    // maketriangle();
    animate = false;
}
reset();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

function cosmos(n) {
    let dots=hitoryOfChaos.length;
    if(dots==0){
        makeRect();
        return
    }
    if (dots>1){
        for (let i = 0; i < n; i++) {
            if (dots>maxdots){
                return
            }
            chooseVertex();
            // makeDot((lastDotX + vertexX) / 2, (lastDotY + vertexY) / 2);
            // for(i=0; i<hitoryOfChaos.length)
            lastDotX = (lastDotX + vertexX) / 2;
            lastDotY = (lastDotY + vertexY) / 2;
            document.getElementById("dots").innerHTML = "Dots:" + dots;
            hitoryOfChaos.push([lastDotX,lastDotY,vertexX,vertexY]);
            // console.log(hitoryOfChaos);
            console.log(hitoryOfChaos);
            
        } 
        cosmosarr();

        // } else if(n==1){
            // PointInTriangle();
            // return
        } else {
            PointInTriangle();   
        }
    }
    // if(dots>0){
    //     if(dots>1){
    //         if(dots>2){
    //             if(dots>3){
                    
    //             }else makeThirdDot();
    //         } else makeSecondDot();
    //     }else  makeFirstDot();

    // }
// animate=false;
// animate;

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
//   dots = dots + 1;
}
// animation();

// animation();
// cosmos(1000);

// for(i=0; i<0; i++){

// let centerX = Math.floor(Math.random() * maxWidth);
// let centerY = Math.floor(Math.random() * maxHeight);

// ctx.beginPath();
// ctx.arc(centerX,centerY,1,0,2*Math.PI);
// ctx.fillStyle = "red"; // color de las estrellas
// ctx.fill();
// ctx.stroke();
// }
// var colorCanvas = document.getElementById('color_canvas');
// var ColorCtx = colorCanvas.getContext('2d');  // This create a 2D context for the canvas

// var colorCanvas = document.getElementById('color_canvas');
// var ColorCtx = colorCanvas .getContext('2d');  // This create a 2D context for the canvas

// var color = 'rgba(0,0,255,1)';
// let gradientH = ColorCtx .createLinearGradient(0, 0, ColorCtx .canvas.width, 0);
// gradientH.addColorStop(0, '#fff');
// gradientH.addColorStop(1, color);
// ColorCtx .fillStyle = gradientH;
// ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, ColorCtx .canvas.height);

// // Create a Vertical Gradient(white to black)
//  let gradientV = ColorCtx .createLinearGradient(0, 0, 0, 300);
//  gradientV.addColorStop(0, 'rgba(0,0,0,0)');
//  gradientV.addColorStop(1, '#000');
//  ColorCtx .fillStyle = gradientV;
//  ColorCtx .fillRect(0, 0, ColorCtx .canvas.width,
//  ColorCtx .canvas.height);

//  colorCanvas.addEventListener('click',function(event){
//     let x = event.clientX;  // Get X coordinate
//     let y = event.clientY;  // Get Y coordinate
//     pixel = ColorCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
//     rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
//     canvasColor = rgb;    // Set this color to body of the document
//  });
