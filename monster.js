class Monster {
    constructor(x, y,r) {
      var options = { 
        density: 1, 
      };
  

      this.r = r;
    
     this.image=loadImage("monster.png");
     this.body=Bodies.circle( x,y,(this.r)/2,options)
    World.add(world, this.body);
    }

    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode (CENTER)
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  
}