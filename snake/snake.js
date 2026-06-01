class Snake {

  constructor() {
    this.parts = [];
    this.parts[0] = createVector(floor(w/2), floor(h/2));
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
  }

  setDir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  update() {
    let head = this.parts[this.parts.length-1].copy();
    this.parts.shift();
    head.x += this.xspeed;
    head.y += this.yspeed;
    this.parts.push(head);
  }

  grow() {
    let head = this.parts[this.parts.length-1].copy();
    this.total++;
    this.parts.push(head);
  }

  isDead() {
    let x = this.parts[this.parts.length-1].x;
    let y = this.parts[this.parts.length-1].y;
    if (x > w-1 || x < 0 || y > h-1 || y < 0) {
      return true;
    }
    for (let i = 0; i < this.parts.length-1; i++) {
      let seg = this.parts[i];
      if (seg.x == x && seg.y == y) {
        return true;
      }
    }
    return false;
  }

  munch(pos) {
    let x = this.parts[this.parts.length-1].x;
    let y = this.parts[this.parts.length-1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    fill(0);
    noStroke();
    for (let i = 0; i < this.parts.length; i++) {
      rect(this.parts[i].x * rez, this.parts[i].y * rez, rez, rez);
    }
  }
}
