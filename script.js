// =====================  rectangle =======================

const width = 8;
const height = 4;

const recangle_area = width * height;
const rectangle_perimeter = width * 2 + height * 2;

console.log(`area of rectangles = ${recangle_area}`);
console.log(`perimeter of rectangles = ${rectangle_perimeter}`);

// =================== circle ==============================

const pi = 3.14;
const radius = 3;

const circle_area = pi * radius * 2;
const circle_perimeter = radius * radius * pi;

console.log(`area of circle = ${circle_area}`);
console.log(`perimeter of circle = ${circle_perimeter}`);

// =================== trapezoid ====================

const base1 = 6;
const base2 = 10;
const z1 = 6;
const z2 = 4;
const h = 7;

const trapezoid_area = ((base1 + base2) * h) / 2;
const trapezoid_perimeter = base1 + base2 + z1 + z2;

console.log(`area of trapezoid = ${trapezoid_area}`);
console.log(`perimeter of trapezoid = ${trapezoid_perimeter}`);
