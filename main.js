right_wrist_x=0;
left_wrist_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(450,300);
    video.position(465,170)
    canvas=createCanvas(500,500);
    canvas.position(750,110);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

