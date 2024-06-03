// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Global Strings for 5 License options (circle, square or triangle)
global.optionMIT = 'Option 1: MIT';
global.optionAPACHE = 'Option 2: APACHE 2.0';
global.optionGPL = 'Option 3: GPL 3.0';
global.optionBSD = 'Option 4: BSD 3';
global.optionNone = 'Option 5: None';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Please enter a short description of your project:',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            global.optionMIT,
            global.optionAPACHE,
            global.optionGPL,
            global.optionBSD,
            global.optionNone]
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?', default:'npm install',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?', default:'npm run test',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

inquirer.prompt(questions)
.then((response) => {
    const readmeContent = generateMarkdown(response);
    
    // console.log(`${response.githubName}`);
    // console.log(`${response.emailAddress}`);
    // console.log(`${response.projectName}`);
    // console.log(`${response.projectDesc}`);
    // console.log(`${response.license}`);
    // console.log(`${response.install}`);
    // console.log(`${response.tests}`);
    // console.log(`${response.repo}`);
    // console.log(`${response.contribute}`);

    //console.log(`${readmeContent}`);

    writeToFile('README.md',readmeContent);

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( 'README.md', data,
        err => err ? console.error(err) : console.log('The README.md file was Generated successfully!'));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
