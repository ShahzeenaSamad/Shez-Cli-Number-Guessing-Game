#! /usr/bin/env node
//SHABANG


import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*10 + 1)


const answers = await inquirer.prompt(
    [
        {
            name : "userGuessedNumber",
            message : "please guess the number between 1 to 10",
            type : "number"
        }
    ]
)
if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed write number");
}
else {
    console.log ("sorry!! try again")
};

