
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');
// TODO: Create an array of questions for user input
  const questions=[
    {
        type:'input',
        name: 'project_name',
        message: 'What is your projects name? (Required)',
    },
    {
        type:'input',
        name: 'description',
        message: 'What is your description? (Required)',
    }
    

  ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   let str=generatePage.createProjectTitle(data.project_name)+"\n"+ generatePage.description(data.description)
   fs.writeFile(fileName, str, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out index.html in this directory to see it!');
    });
}

// TODO: Create a function to initialize app
 async function init(questions) {
     let answers = await inquirer.prompt(questions)
     console.log(answers)
     await writeToFile("./README.md",answers)
    return answers

}

// Function call to initialize app

async function app() {
    await init(questions);
}
app();