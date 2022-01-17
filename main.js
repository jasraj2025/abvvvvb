song = "";

leftWristX="";
leftWristY="";
righttWristY="";
righttWristX="";

scoreLeftwrist= "";


function play_song(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreLeftwrist = results[0].pose.keypoints[9].score;
        console.log( "Score of left wrist" + scoreLeftwrist);
        leftWristX   =   results[0].pose.leftWrist.x;
        leftWristY   =   results[0].pose.leftWrist.y;
        console.log("left Wrist x " + leftWristX + "left Wrist y " + leftWristY)
        
        righttWristY   =   results[0].pose.rightWrist.y;
        righttWristX   =   results[0].pose.rightWrist.x;
        console.log("right Wrist x " + righttWristX + "right Wrist y " + righttWristY)
    }

}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    video =  createCapture(500,500);
    video.hide();
    poseNet = ml5.poseNet(video , gotPoses);
    poseNet.on('pose', gotPoses)
}

function preload(){
    song = loadSound("music.mp3");
}

function draw() {
    image(video,0,0,500,500);

    fill("#FF0000");
    stroke("#FF0000");
    circle(leftWristX,leftWristY,20);

    if (scoreLeftwrist > 0.2)
    {
        
    inNunberleftWristY = Number(leftWristY);
    remove_decimals = floor(inNunberleftWristY);
    volume = remove_decimals / 500;
    document.getElementById("volume").innerHTML = "volume = " +  volume;

    song.setVolume(volume);

}
}




























































































