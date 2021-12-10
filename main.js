noseX=0;
noseY=0;

function preload(){
    lollipop=loadImage("https://cdn4.iconfinder.com/data/icons/disco-2/53/90-256.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.position(575,210);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function draw(){
image(video,0,0,400,400);
image(lollipop,noseX,noseY,80,120)
}
function take_picture(){
    save ("myFilterImage.png")
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-30;
    noseY=results[0].pose.nose.y+40;
    }
}
