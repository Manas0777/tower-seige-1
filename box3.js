class Box3{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'density':0.5
      }
      this.boxObject = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.boxObject);
    }
    display(){
      push();
      strokeWeight(1.5);
      fill(0, 173, 247)
      rectMode(CENTER);
      rect(this.boxObject.position.x,this.boxObject.position.y, this.width, this.height);
      pop();
    }
  }
       