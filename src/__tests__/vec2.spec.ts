import Vec2 from '../vec2';

test('add vectors', () => {
  const v1 = new Vec2([1, 2]);
  const v2 = new Vec2([2, 2]);
  v1.add(v2);
  expect(v1.x).toBe(3);
  expect(v1.y).toBe(4);
});

test('subtract vectors', () => {
  const v1 = new Vec2([5, 4]);
  const v2 = new Vec2([2, 2]);
  v1.subtract(v2);
  expect(v1.x).toBe(3);
  expect(v1.y).toBe(2);
});

test('multiply vectors', () => {
  const v1 = new Vec2([2, 7]);
  const v2 = new Vec2([1, 3]);
  v1.multiply(v2);
  expect(v1.x).toBe(2);
  expect(v1.y).toBe(21);
});

test('divide vectors', () => {
  const v1 = new Vec2([2, 6]);
  const v2 = new Vec2([1, 3]);
  v1.divide(v2);
  expect(v1.x).toBe(2);
  expect(v1.y).toBe(2);
});

test('scale vector', () => {
  const v1 = new Vec2([2, 6]);
  const scalar = 4;
  v1.scale(scalar);
  expect(v1.x).toBe(8);
  expect(v1.y).toBe(24);
});
