function preload(){

}

function draw(){
image(video,110,110,200,200);
fill("green");
rect(50,90,400,10);
rect(450,90,10,400);
rect(50,480,400,10);
rect(38,90,10,400);
}

function setup(){
canvas = createCanvas(800,500);
canvas.position(100,100);
video = createCapture(VIDEO);
video.hide();
}

function take_snapshot(){
save("LOLyou.png");
}
