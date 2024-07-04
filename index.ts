#! /usr/bin/env node

// import the inquirer and chalk packages.
import inquirer from "inquirer";
import chalk from "chalk";

// Display message.
console.log("=".repeat(80));
console.log(chalk.bold.yellow("\t\tCode With Dr.Shahid -- Word Counter Application"));
console.log("=".repeat(80));

// Asking the user to enter a sentence.
let answers = await inquirer.prompt([
    {
        name: "sentence",
        list: "input",
        message: chalk.bold.bgGreen("Enter a Sentence"),
    }
]);

// using the trim and split in the sentence for words counting.
let word = answers.sentence.trim().split(" ");

// console/print and color full the project for good looking.
console.log("=".repeat(40));
console.log(chalk.bold.blue("Sentence Words:"));
console.log(word);
console.log("=".repeat(40));
console.log(chalk.bold.green(`Total words in the sentence: ${chalk.bold.red(word.length)}`));
console.log("=".repeat(30));
