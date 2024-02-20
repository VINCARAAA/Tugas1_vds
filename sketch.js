let j;
function setup (){
    createCanvas (400,400)
    background (20)
    y =105;
    j=1;
}
function draw(){
    var y = 100 + 30 * Math.sin(PI/10*j);
    j=0+1;
    fill (138,43,226);
    line (70,70,290,290);

    strokeWeight (5);
    ellipse (150,y,60,60);

}
    