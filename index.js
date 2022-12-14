//packages used
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

console.log(generateMarkdown)

//questions to fill out markdown
inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of you project.'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give instructions on how to install (if applicable).'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is this project using?',
        choices: ['MIT', 'Apache License 2.0', 'ISC License', 'BSD 3-Clause License', 'N/A']

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Include instructions on how others can contributr to your project (if applicable).'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your project here: (if applicable).'

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email that users can send questions to?'

    },
])
    .then(answers => {
        console.log(answers)

        const readme = generateMarkdown(answers)
        console.log(readme)
        //creates a readme file
        fs.writeFile('./GeneratedREADME.md', readme, error => {
            if (error) throw error

            console.log('README file was created!')
        })
    })

    .catch(error => console.log(error))


