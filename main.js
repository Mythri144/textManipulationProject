difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(650,500);
    video.position(100,180);
    canvas=createCanvas(550,550);
    canvas.position(1050,150);
    poseNet=ml5.poseNet(video,whenLoads);
    poseNet.on('pose',whenFound);
}

function draw(){
    background(194, 245, 245);
    fill(34, 132, 189);
    stroke(34, 132, 189);
    textSize(difference);
    text('NOTICE!', 100, 100);
    document.getElementById("text_size").innerHTML = "The width & height of the text is = " + difference + "px. ";
}

function whenLoads(){
    console.log('PoseNet is initialized! ');
}

function whenFound(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", difference = " + difference);
    }
}