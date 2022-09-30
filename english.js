function main_page(){
    window.location = "index.html";
}
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
song1 = loadSound("")
song2 = loadSound("")
}
function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500)
}