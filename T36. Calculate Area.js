function areaOfRectangle(length, width) {
  return length * width;
}
function areaOfCircle(radius) {
  return 3.14 * radius ** 2;
}
function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

function calculatePaintingCost(dimension1, dimension2, calculatearea) {
  const area = calculatearea(dimension1, dimension2);
  const costperUnit = 2;
  const totalcost = costperUnit * area;
  return totalcost;
}

console.log(calculatePaintingCost(10, 8, areaOfRectangle));
console.log(calculatePaintingCost(10, null, areaOfCircle));
console.log(calculatePaintingCost(10, 8, areaOfTriangle));
