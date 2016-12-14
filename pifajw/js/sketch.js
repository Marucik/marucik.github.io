var yoff = 0.0;  


function setup(){
    createCanvas(2000, 1000);
}

function draw() {
    background(50);    
    fill(70);
    
    beginShape();    
var xoff = 0;
  
    for (var x = 0; x <= width; x += 10) {

        var y = map(noise(xoff, yoff), 0, 1, 500,300);

        vertex(x, y); 

        xoff += 0.05;
    }
  
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
}
    
