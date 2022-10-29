// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name:'title',
    message:'What is the title of your project?'

},
{
    type:'input',
    name:'description',
    message:'Give a description of you project.'

},
{
    type:'input',
    name:'description',
    message:'Give a description of you project.'

},
];

// TODO: Create a function to write README file
fs.writeToFile('./README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
