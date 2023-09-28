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
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();

    this.x = x;
    this.y = y;

    this.draw(ctx);
  }

  private draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#" + this.color;
    ctx.fillText(this.name, this.x - 10, this.y - 10);

    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#" + this.color;
    ctx.stroke();
  }

  public removeUser(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.clearRect(x - 10, y - 10, 100, 100);
  }

  public update(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.removeUser(ctx, x, y);
    this.locate(x, y, ctx);
  }
}

export default User;
