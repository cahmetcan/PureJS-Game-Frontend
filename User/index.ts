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

  public locate(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;

    this.draw(ctx);
  }

  private draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    var x = 100;
    var y = 100;
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

export default User;
