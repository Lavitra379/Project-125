function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {

    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() {
    background('rgb(0,255,0)');
}

function textSize()
{
    textSize(32);
text('Lavitra', 10, 30);
fill(0, 102, 153);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
     right_wristX=results[0].pose.nose.x-45;
     right_wristY=results[0].pose.nose.y+10;
        console.log("right wrist x = " + right_wristX);
        console.log("right wrist y = " + right_wristY);
      left_wristX=results[0].pose.nose.x-45;
      left_wristY=results[0].pose.nose.y+10;
        console.log("left wrist x = " + left_wristX);
        console.log("left Wrist y = " + left_wristY);
    }
}
