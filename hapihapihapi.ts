// ### **Question 1: Callbacks**
// **Task:**
// You are creating a basic calculator application. Write a TypeScript function named **`calculate`** that takes two numbers and an operation (add, subtract, multiply, or divide) as parameters. Implement a callback function to handle the calculation and display the result.
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(num1: number, num2: number, operation: Operation, callback: (result: number) => void): void {
 let result: number;

 switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      throw new Error('Invalid operation');
 }

 callback(result);
}

calculate(2, 6, 'add', (result) => {
 console.log(`The result of the addition is: ${result}`);
});

calculate(2, 6, 'subtract', (result) => {
 console.log(`The result of the subtraction is: ${result}`);
});

calculate(2, 6, 'multiply', (result) => {
 console.log(`The result of the multiplication is: ${result}`);
});

calculate(2, 6, 'divide', (result) => {
 console.log(`The result of the division is: ${result}`);
});


// ### **Question 2: Promises**

// **Task:**
// Imagine you are building a simple quiz app. Create a TypeScript function named **`fetchQuestion`** that returns a promise. This promise should resolve with a random quiz question (string). Use the promise to display the question when it's ready.
function fetchQuestion(): Promise<string> {
    return new Promise((resolve) => {
       // Simulate an asynchronous request to fetch a quiz question.
       setTimeout(() => {
         const question = 'What is the capital of France?';
         resolve(question);
       }, 1000);
    });
   }
   
   fetchQuestion().then((question) => {
    console.log(question);
   });

//    ### **Question 3: Async/Await**

// **Task:**
// Build a TypeScript function named **`waitAndGreet`** that takes a name (string) as a parameter. This function should use async/await to simulate a delay (e.g., 2 seconds) and then display a greeting with the provided name. Call this function from within an async function and log the result.
// Asynchronous function to simulate a delay
async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
   }
   
   // Function to greet a person after a delay
   async function waitAndGreet(name: string): Promise<string> {
    await delay(2000); // 2 seconds delay
    return `Hello, ${name}!`;
   }
   
   // Calling the waitAndGreet function from within an async function
   (async () => {
    const result = await waitAndGreet("John Doe");
    console.log(result);
   })();
   