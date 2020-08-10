class Papper {
    constructor(x, y) {
      var options = {
         isStatic:false,
         restituion:0.3,
         friction:0.5,
         density:1.2
      }
      this.body = Bodies.circle(x, y, 40,  options);
      this.radius = 40;
      
    
      this.image = loadImage("paper.png");

      World.add(world, this.body);
    }
    display(){
         
      var pos =this.body.position;
      var angle=this.body.angle
      

    push()  

        translate(pos.x,pos.y)

    rotate(angle)

      imageMode(RADIUS);
      fill("red");

      image(this.image,0, 0, this.radius, this.radius);
    pop()
    }
  };