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
    message:'Give instructions on how to install (if applicable).'

},
{
    type:'input',
    name:'usage',
    message:'Provide instructions and examples for use.'

},
{
    type:'list',
    name:'license',
    message:'Which license is this project using?',
    choices:['BSD 2-Clause "Simplified" or "FreeBSD" license',
    'GNU General Public License (GPL)',
    'GNU Library or "Lesser" General Public License (LGPL)',
    'MIT license',
    'Mozilla Public License 2.0',
    'Common Development and Distribution License',
    'Eclipse Public License version 2.0']

},
{
    type:'input',
    name:'Contributing',
    message:'Include instructions on how others can contributr to your project (if applicable).'

},
{
    type:'input',
    name:'Tests',
    message:'Write tests for your project here: (if applicable).'

},
{
    type:'input',
    name:'Questions',
    message:'Please include a way for users to contact you with questions (GitHub/Email)'

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
