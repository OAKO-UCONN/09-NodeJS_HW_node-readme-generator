
//Loading required Modules
const inquirer = require("inquirer");
const fs = require("fs");
const os = require("os");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
  type: "input",
  name: "title",
  message: "What is the name of your project?"  
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "repo",
    message: "Type in the url of your repository."
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project"
  },
  {
    type: "input",
    name: "licence",
    message: "What licence for this repository? GNU, BSD, MIT?"
  },
  {
    type: "input",
    name: "contributors",
    message: "List contributors to your project."
  }
    
    //rest of the questions here....
   
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    }
  })
}


// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
    const response = generateMarkdown(answers);
    console.log(answers);
    writeToFile("README.md", response);
  })
}



// function call to initialize program
init();

//Inquierer Promise
//inqPromise = promptUser();

//Output JSON file function.
/*
inqPromise.then(function(userInput) {
  let md = ` 
  # ${userInput.title}

  ## Creator of Project
  * ${userInput.github}

  ## Repository URL
  * ${userInput.repo}

  ## Description
  * ${userInput.description}

  ## Licence
  * ${userInput.licence}

  ## Contributors
  * ${userInput.contributors}

  `
});
*/