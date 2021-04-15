class Iron {
    constructor(x, y, width, height, angle) {
      var options = {
        'density':0.8,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = this.x;
      this.height = this.y;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };