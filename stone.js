class Stone {
    constructor(x,y,radius) {
      var options = {
          
          restitution:0,
          friction:1,
          density:1.2
      }
      this.radius=radius;
      this.x=x;
      this.y=y;
      this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };