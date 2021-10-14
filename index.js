// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your app?"
    },
    {
        name: "description",
        type: "input",
        message: "Please briefly describe your project."
    },
    {
        name: "installation",
        type: "input",
        message: "How is your app installed?"
    },
    {
        name: "usage",
        type: "input",
        message: "How is your app used?"
    },
    {
        name: "contribute",
        type: "input",
        message: "How would one contribute to the project?"
    },
    {
        name: "tests",
        type: "input",
        message: "How would one test the app?"
    },
    {
        name: "license",
        type: "list",
        message: "Please choose a license",
        choices: ["MIT", "GPL v3", "ODC By", "No License"],
      },
      {
          name: "github",
          type: "input",
          message: "Please enter your GitHub user name."
      },
      {
          name: "email",
          type: "input",
          message: "Please enter your email."
      }
];

inquirer.prompt(questions).then((answers) => {

    const readmeContents = generateMarkdown(answers)
  
    fs.writeFile("README.md", readmeContents, (err) => {
      if (err) {
        console.log(err);
        console.log(
          "Uh oh. Something went wrong. Could not create README.md. Scroll up for details."
        );
        return process.exit(1);
      }
      console.log("Success! Created README.md");
    });
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
