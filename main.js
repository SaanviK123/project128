canvas = document.getElementById("myCanvas");
song = "";

leftWristX = 0;
leftWrsitY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function songname() {
    song.songname();
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results.pose.leftWrist.x;
        leftWrsitY = results.pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results.pose.rightWrist.x;
        rightWristY = results.pose.rightWrist.y;
        console.log("rightWristx = " + rightWristX + "rightWristY = " + rightWristY);
    }
}