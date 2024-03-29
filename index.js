#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Choose a random Number",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congralation !! You guess a Right Number!!!");
}
else {
    console.log("sorry you guess wrong number");
}
