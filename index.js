// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

console.log(generateMarkdown)

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
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
    name:'installation',
    message:'Give instructions on how to install (if any).'

},
{
    type:'input',
    name:'usage',
    message:'Provide instructions and examples for use.'

},
{
    type:'',
    name:'license',
    message:'Which license is this project using?'

},
{
    type:'input',
    name:'Contributing',
    message:'Provide instructions and examples for use.'

},
])
    .then(answers => {
        console.log(answers)

        const readme = generateMarkdown(answers)
        console.log(readme)

        fs.writeFile('./README.md', readme, error => {
            if(error) throw error

            console.log('README saved!')
        })
    })

    .catch(error => console.log(error))

// TODO: Create a function to write README file
// fs.writeToFile('./README.md', data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
