function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(1, 2); // Correct usage

let num1: any = 1;
let num2: any = '2';

if (isNumber(num1) && isNumber(num2)) {
  let result2 = add(num1, num2); // Correct usage with type guard
} else {
  console.error('Invalid input type')
}

let result3 = add(1, parseInt(num2 as string));//Correct usage with type assertion