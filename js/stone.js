class Stone{

constructor(x, y, width, height){
var options={
isStatic: false,
restitution: 0,
friction:1,
density:1.2
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("images/stone.png");
World.add(world, this.body);
}
display(){
    var angle= this.body.angle;
    push();
    rotate(angle);
    translate(this.body.position.x,this.body.position.y)
    image(this.image, 215, 385, this.width, this.height);
    pop();
}






}