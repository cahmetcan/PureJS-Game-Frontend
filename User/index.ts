class User {
  id: string;
  x: number;
  y: number;
  r: number;
  color: string;
  name: string;
  constructor(
    id: string,
    x: number,
    y: number,
    r: number,
    color: string,
    name: string
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.name = name;
  }
  /* 
    ctx.beginPath();
  var x = 400
  var y = 100
  // x , y , radius , start angle , end angle
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.stroke();

  */

  public locate(x: number, y: number, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();

    this.x = x;
    this.y = y;

    this.draw(ctx);
  }

  private draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(this.name, this.x - 10, this.y - 10);
    
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default User;
