noseX=0;
noseY=0;
leftWristX=0;
righttWristX=0;
difference=0
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,80);
    

   poseNet= ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("zhekfufui3gfkiugfkihjn4vghrnhrygbrkul4hrghvjjrhy4hihy4yh");
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
    console.log("Nose X = " + noseX + "Nose Y =" + noseY)
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=floor(leftWristX-rightWristX)
    console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "Difference =" + difference)
}
}
function draw(){
    document.getElementById("square_side").innerHTML="Width and height of the square  will be = " + difference + "px"
    background('#00FF00');
    fill("#0000ff");
    stroke("#ff0000");
    square(noseX , noseY , difference);
    
}