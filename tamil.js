song1 = '';
song2 = '';
song1status = '';
song2status = '';
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
scorerightwrist = 0;
scoreleftwrist = 0;
function preload(){
    song2 = loadSound("PathalaPathala.mp3");
    song1 = loadSound("PonniNadhi.mp3");
}
function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    push();
  translate(width,0);
  scale(-1, 1);
image(video, 0,0, 500, 600);
pop();
    song1status = song1.isPlaying();
    song2status = song2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreleftwrist >0.2){
circle(leftwristx, leftwristy, 20);
song1.stop();
if(song2status == false){
    song2.play();
}
    }
    if(scorerightwrist>0.2){
        circle(rightwristx, rightwristy, 20);
        song2.stop();
        if(song1status == false){
            song1.play();
        }
            }
}
function modelloaded(){
    console.log('PoseNet is Initailized')
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;

        console.log("Right Wrist x = " + rightwristx + "Right Wrist y = " + rightwristy);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("Left Wrist x = " + leftwristx + "Left Wrist y = " + leftwristy);
    
        scoreleftwrist = results[0].pose.keypoints[9].score;
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log("Left Wrist Score = " + scoreleftwrist + "Right Wrist Score = "+ scorerightwrist);
    }
}