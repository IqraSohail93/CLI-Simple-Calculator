import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform action", type: "list", name: "operator", choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"] }
])
// CONDITIONAL STATEMENT
if(answer.operator === "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "SUBTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "MULTIPLICATION"){
        console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "DIVISION"){
    console.log(answer.firstNumber * answer.secondNumber)}
    else("Please select the valid operator")