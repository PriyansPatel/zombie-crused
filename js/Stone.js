class stone
{
  constructor(x, y,w, h) 
  {
    let options = {
     isStatic:0.8
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellpiseMode(CENTER);
    noStroke();
    fill(148,127,146);
    ellpise(0,0, this.w, this.h);
    pop();
  }
}
