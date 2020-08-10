class Box {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("dustbingreen.png");

      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image, 390, 385, 270, 220);

      var pos =this.body.position;
      var angle=this.body.angle

    push()  

        translate(pos.x,pos.y)

    rotate(angle)

      rectMode(CENTER);
      fill("white")
      stroke("white")
     
      rect(0, 0, this.width, this.height);
    pop()
    }
  };