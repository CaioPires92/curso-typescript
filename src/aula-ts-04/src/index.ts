function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if (isEven(result)) {
    console.log(`The result is ${result} and it's even!`);
  } else {
    console.log(`The result is ${result} and it's odd!`);
  }
}

(() => {
  const num1Prompt = prompt("First Number");
  const num2Prompt = prompt("Second Number");

  const num1 = parseFloat(num1Prompt);
  const num2 = parseFloat(num2Prompt);

  if (!isNaN(num1) && !isNaN(num2)) {
    let result = sum(num1, num2);
    result += multiply(1, 2);
    showResult(result);
  } else {
    console.log("Invalid input. Please enter valid numbers.");
  }
})();
