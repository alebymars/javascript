function calculatePerimeter(n) {
  let perimeter = 0;
  for (let i = 0; i < n.length; i += 2) {
    let x1 = n[i];
    let y1 = n[i + 1];
    let x2 = n[(i + 2) % n.length];
    let y2 = n[(i + 3) % n.length];
    let sideLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    perimeter += sideLength;
  }
  return perimeter;
}

let n = [0, 0, 3, 0, 3, 4, 0, 4];
let expectedPerimeter = 14;
let actualPerimeter = calculatePerimeter(n);
if (actualPerimeter === expectedPerimeter) {
  console.log("Test passed!");
} else {
  console.log("Test failed!");
}

console.log(calculatePerimeter([4, 4, 4, 4]));