
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
    },
    {
        type:'input',
        name: 'installation',
        message: 'how do you install it? (Required)',
    },
    {
        type:'input',
        name: 'usage',
        message: 'What is its use? (Required)',
    },
    {
        type:'input',
        name: 'contribution',
        message: 'What are the contributions guidelines? (Required)',
    },
    {
        type:'input',
        name: 'tests',
        message: 'What are the test instructions? (Required)',
    },
    {
        type:'list',
        name: 'license',
        message: 'What license did you use? (Required)',
        choices: ['af1-3.0', 'cc', 'mit', 'wtfp1']
    },
    {
        type:'input',
        name: 'github',
        message: 'What is your github? (Required)',
    },
    {
        type:'input',
        name: 'email',
        message: 'What is your email? (Required)',
    },




  ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   let str=generatePage.createProjectTitle(data.project_name)+"Description"+"\n"+ generatePage.description(data.description)
   +"Installation"+"\n"+ generatePage.installation(data.installation)+"Usage"+"\n"+ generatePage.usage(data.usage)+"contributing"+"\n"+ generatePage.contribution(data.contribution)
   +"Tests"+"\n"+ generatePage.tests(data.tests)+"\n"+ generatePage.license(data.license)+"\n"+ generatePage.github(data.github)+"\n"+ generatePage.email(data.email)
   fs.writeFile(fileName, str, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out README.md in this directory to see it!');
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