class People {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.image=loadImage("assets/player.png")
      

      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("brown");
     imageMode(CENTER);
     image(this.image,pos.x, pos.y,60,120);
      pop();
    }
  }
  