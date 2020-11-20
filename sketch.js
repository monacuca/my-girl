var myFont;
var generate=false;


let likes = ["She enjoys rainy days and likes to spend them watching nature documentaries and making soup. ",
             "She likes road trips, especially the long ones. " , 
             "One of her favorite activities is going to the beach. ",
             "Her favorite candies include chocolate and guava paste, but are not limited to others. ", 
             "She loves a good wine and charcuterie board pairing. ",
             "Her favorite color is baby blue. ",
             "She often listens to lo-fi music while studying. ", 
             "Her favorite subject in school growing up was math, but she also found history really interesting. ",
             "She is introverted and enjoys curling up with her pets in a particularly cold day. ",
             "She is extroverted and highly sociable, but sometimes she likes to stay at home and read a book or watch a series. ",
             "She is athletic and energetic. "
            ];
let dislikes = ["She dislikes wearing cotton clothing because it makes her itchy. ",
               "She is scared of moths. " ,
                "She can be lazy and sometimes a little rude. ", 
                "Sometimes she is a little too hard on herself despite being a hardworker. ",
                "She sleeps a lot on weekends and makes art for her friends on her free time. ",
               "She still isn't completely sure of what she wants to do. ",
               "She likes putting different essential oils in her bath. ",
                "She is terrified of wild animals but she can appreciate them from a distance. ", 
               "One of her favorite pasttimes is trying out different sports. ",
               "She puts  a lot of pressure on herself. ", 
                "Prefers to spend time in person rather than on social media. ",
                "She loves winter. ", 
                "She hates the cold. ", 
                "Her favorite animals are pandas. "
              ];

let hobbies = ["Some of her favorite pastimes include knitting and painting. ",
              "She had a pet hamster as a child. " , 
               "She likes creating scrapbooks and other arts & crafts activities. ",
               "She volunteers at her local library to read to kids. ", 
               "She loves to dance but is terrible at it. ",
               "She likes to light candles after long days and right before important events. ",
              "One of her main hobbies is stamp collecting. ",
              "She enjoys rainy days. "];

var mX;
var mY;
let like, dislike, hobby; 

function preload(){
  myFont = loadFont("https://cdn.glitch.com/d8c943d1-395d-43b1-acc8-67242bca854b%2FSegoe%20UI.ttf?v=1605640036385");}
function setup() {
  if(windowWidth/windowHeight >0.8){
  createCanvas(window.innerWidth, window.innerHeight);}
  else{
    createCanvas(window.innerWidth, window.innerWidth*1.2);
  }
  
  background(color("orange"));
  like = random(likes);
  dislike = random(dislikes);
  hobby = random(hobbies);

}

function draw() {
   
     
  textFont(myFont);
  background(color("orange"));
  let w = width/2;
  let h = height/3;
 
  grid_bg();
  
  vaporwave_popup(w, h);
  if (generate){
      like = random(likes);
    dislike = random(dislikes);
    hobby = random(hobbies);
    generate = false;
    mX = 0;
    mY = 0;
  }
  banner_text(w, h);
 
   
}
function grid_bg(){
  stroke(178, 20, 186);
  strokeWeight(0.3);
  noFill();
  for(let i =0; i<30; i++){
    for(let j =0; j<30; j++){
      rect(i*width/15, j*width/15, width/15, width/15);
    }
  }
}
function banner_text(w, h){
  push();
    translate(width/2, height/2);
    textAlign(CENTER,CENTER);
    fill(0);
  textSize(min(width, height)/1000*26);
    noStroke();
  
    text("This woman is in STEM. "+ like + dislike + hobby, -5*w/12,-6*h/14+h/9, 5*w/6)
  pop();
  
}
function vaporwave_popup(w, h){
  //    rect(-w/2,5*h/9, w/3, h/10);
  if(((mX>= (-w/2+width/2))&&(mX<(-w/2+width/2+w/3)))&&((mY>= (5*h/9+height/2))&&(mY<(5*h/9+height/2+h/10)))){
      generate = true; 
       }
  strokeWeight(1);
  push();
  textSize(min(width, height)/1000*24);
    translate(width/2, height/2);
    stroke(178, 20, 186);
    fill(96, 155, 209);
    rect(-w/2,-h/2, w, h);
    fill(178, 20, 186);
    rect(w/2-(5+h/15),-h/2 + 5, h/15, h/15);
    push();
      translate(-h/15 - 5, 0);
      rect(w/2-(5+h/15),-h/2 + 5, h/15, h/15);
      push();
        translate(-h/15 - 5, 0);
        rect(w/2-(5+h/15),-h/2 + 5, h/15, h/15);
      pop();
    pop();
    noStroke();
    fill(255);
    rect(-w/2 + 5,-h/2 + h/9, w-10, 6*h/7);
    
    //line(-w/2 ,-h/2+w/24,w/2,-h/2+w/24);
    stroke(178, 20, 186);
    if(generate){
       fill(178, 20, 186);
    }else{
       fill(96, 155, 209);
    }
   
    push();
    rect(-w/2,5*h/9, w/3, h/10);
    pop();
    noStroke();
    fill(color("white"));
    textAlign(LEFT,CENTER);
    text("Counterspace Games for BIWOC",-w/2 + 5,((-h/2 + h/9)+(-h/2))/2)
    textAlign(CENTER,CENTER);
    text("GENERATE",-w/2+w/6,5*h/9 + h/25)
  pop();

}
function windowResized() {
if(windowWidth/windowHeight >0.8){
  resizeCanvas(windowWidth, windowHeight);}
  background(color("orange"));
}

function mousePressed() {
  
  mX =mouseX;
  mY=mouseY;
  
}
//leave this stuff here and don't worry about it. It's just here to make this code editor recognize p5 functions
/* global alpha, CENTER, blue, brightness, color, green, hue, lerpColor, lightness, red, saturation, p5.Color, Setting, background, clear, colorMode, fill, noFill, noStroke, stroke, erase, noErase, arc, ellipse, circle, line, point, quad, rect, square, triangle, ellipseMode, noSmooth, rectMode, smooth, strokeCap, strokeJoin, strokeWeight, bezier, bezierDetail, bezierPoint, bezierTangent, curve, curveDetail, curveTightness, curvePoint, curveTangent, beginContour, beginShape, bezierVertex, curveVertex, endContour, endShape, quadraticVertex, vertex, plane, box, sphere, cylinder, cone, ellipsoid, torus, loadModel, model, HALF_PI, PI, QUARTER_PI, TAU, TWO_PI, DEGREES, RADIANS, print, frameCount, deltaTime, focused, cursor, frameRate, noCursor, displayWidth, displayHeight, windowWidth, windowHeight, windowResized, width, height, fullscreen, pixelDensity, displayDensity, getURL, getURLPath, getURLParams, preload, setup, draw, remove, disableFriendlyErrors, noLoop, loop, isLooping, push, pop, redraw, p5, DOM, p5.Element, select, selectAll, removeElements, changed, input, createDiv, createP, createSpan, createImg, createA, createSlider, createButton, createCheckbox, createSelect, createRadio, createColorPicker, createInput, createFileInput, createVideo, createAudio, createCapture, createElement, p5.MediaElement, p5.File, p5.Graphics, createCanvas, resizeCanvas, noCanvas, createGraphics, blendMode, drawingContext, setAttributes, console, applyMatrix, resetMatrix, rotate, rotateX, rotateY, rotateZ, scale, shearX, shearY, translate, LocalStorage, storeItem, getItem, clearStorage, removeItem, createStringDict, createNumberDict, p5.TypedDict, p5.NumberDict, append, arrayCopy, concat, reverse, shorten, shuffle, sort, splice, subset, float, int, str, boolean, byte, char, unchar, hex, unhex, join, match, matchAll, nf, nfc, nfp, nfs, split, splitTokens, trim, deviceOrientation, accelerationX, accelerationY, accelerationZ, pAccelerationX, pAccelerationY, pAccelerationZ, rotationX, rotationY, rotationZ, pRotationX, pRotationY, pRotationZ, turnAxis, setMoveThreshold, setShakeThreshold, deviceMoved, deviceTurned, deviceShaken, Keyboard, keyIsPressed, key, keyCode, keyPressed, keyReleased, keyTyped, keyIsDown, Mouse, movedX, movedY, mouseX, mouseY, pmouseX, pmouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed, mouseMoved, mouseDragged, mousePressed, mouseReleased, mouseClicked, doubleClicked, mouseWheel, requestPointerLock, exitPointerLock, touches, touchStarted, touchMoved, touchEnded, createImage, saveCanvas, saveFrames, p5.Image, loadImage, image, tint, noTint, imageMode, Pixels, pixels, blend, copy, filter, get, loadPixels, set, updatePixels, IO, loadJSON, loadStrings, loadTable, loadXML, loadBytes, httpGet, httpPost, httpDo, p5.XML, createWriter, p5.PrintWriter, save, saveJSON, saveStrings, saveTable, Table, p5.Table, p5.TableRow, day, hour, minute, millis, month, second, year, Math, abs, ceil, constrain, dist, exp, floor, lerp, log, mag, map, max, min, norm, pow, round, sq, sqrt, fract, Vector, createVector, p5.Vector, noise, noiseDetail, noiseSeed, randomSeed, random, randomGaussian, Trigonometry, acos, asin, atan, atan2, cos, sin, tan, degrees, radians, angleMode, textAlign, textLeading, textSize, textStyle, textWidth, textAscent, textDescent, loadFont, text, textFont, p5.Font, orbitControl, debugMode, noDebugMode, ambientLight, specularColor, directionalLight, pointLight, lights, lightFalloff, spotLight, noLights, Material, loadShader, createShader, shader, resetShader, normalMaterial, texture, textureMode, textureWrap, ambientMaterial, emissiveMaterial, specularMaterial, shininess, p5.Geometry, p5.Shader, camera, perspective, ortho, frustum, createCamera, p5.Camera, setCamera*/
