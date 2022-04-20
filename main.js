function preload()
{

}

function setup()
{
    canvas = createCanvas(680,400);
    canvas.position(200, 350);
    video = createCapture(VIDEO);
    video.hide();
   
    
}

function draw()
{
    image(video, 0, 0, 680, 400);
    rect(30, 50, 15, 300);
    rect(630, 50, 15, 300);
    rect(30, 30, 600, 15);
    rect(30, 350, 600, 15);
    rect(10, 10, 55, 55, 25);
    rect(610, 10, 55, 55, 25);
    rect(10, 330, 55, 55, 25);
    rect(610, 330, 55, 55, 25);
}

function take_snapshot()
{
    save('Your_filtered_picture.png');    
}


