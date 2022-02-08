import { nearlyEquals } from './utils';

export default class Vec2 {
  private values = new Float32Array(2);

  static readonly zero = new Vec2([0, 0]);

  get x(): number {
    return this.values[0];
  }

  set x(value: number) {
    this.values[0] = value;
  }

  get y(): number {
    return this.values[1];
  }

  set y(value: number) {
    this.values[1] = value;
  }

  get xy(): [number, number] {
    return [this.values[0], this.values[1]];
  }

  set xy(values: [number, number]) {
    this.values[0] = values[0];
    this.values[1] = values[1];
  }

  constructor(values?: [number, number]) {
    if (values !== undefined) {
      this.xy = values;
    }
  }

  equals(v: Vec2): boolean {
    if (!nearlyEquals(this.x, v.x)) return false;
    if (!nearlyEquals(this.y, v.y)) return false;
    return true;
  }

  squaredLength(): number {
    return this.x * this.x + this.y * this.y;
  }

  length(): number {
    return Math.sqrt(this.squaredLength());
  }

  add(v: Vec2): Vec2 {
    this.x += v.x;
    this.y += v.y;

    return this;
  }

  subtract(v: Vec2): Vec2 {
    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  multiply(v: Vec2): Vec2 {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  divide(v: Vec2): Vec2 {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  // using `dest`
  // scale(scalar: number, dest?: Vec2): Vec2 {
  //   if (!dest) dest = this;
  //   dest.x *= scalar;
  //   dest.y *= scalar;
  //   return dest;
  // }

  scale(scalar: number): Vec2 {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  normalize(): Vec2 {
    let length = this.length();

    if (length === 1) {
      return this;
    }

    if (length === 0) {
      this.x = 0;
      this.y = 0;

      return this;
    }

    length = 1.0 / length;

    this.x *= length;
    this.y *= length;

    return this;
  }
}
