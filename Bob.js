class Bob {

constructor(x,y,radius){
    this.body = Bodies.circle(x,y,radius,{
        isStatic: true,
        restitution: 0.5,
        friction: 0.5,
        density: 1.0
    })
    World.add(world,this.body);
   this.radius = radius;
  
}
display(){
        fill("purple");
        ellipseMode(CENTER);
        circle(this.body.position.x,this.body.position.y,this.radius);
        
}

}