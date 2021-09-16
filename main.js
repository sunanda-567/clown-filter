noseX=0;
noseY=0;
function preload() {
clownnose=loadImage("https://i.postimg.cc/pd5LQgNB/Clown-nose-large-removebg-preview.png");
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    
   video= createCapture(VIDEO);
   video.size(300,300); 
   video.hide();

   posenet=ml5.poseNet(video, modelLoaded)
   posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet.initialized")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-45;
        console.log("nose x ="+noseX);
        noseY=results[0].pose.nose.y-35; 
        console.log("nose y ="+noseY); 
    }
}

function draw() {
image(video, 0, 0, 300, 300);
// fill( 255, 0, 0);
// stroke(255, 0, 0);
// circle(noseX, noseY, 40);
image(clownnose, noseX, noseY, 90, 90);
}
function takesnapshot() {
    save('screenshot.png')
}