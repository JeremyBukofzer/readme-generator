// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseChoice = license
  let licenseBadge = ''
  if (licenseChoice === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  else if (licenseChoice === 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  else if (licenseChoice === 'ISC License') {
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  }
  else if (licenseChoice === 'BSD 3-Clause License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  }
  else {
    license = ''
  }
  return licenseBadge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseChoice = license
  let licenseLink = ''
  if (licenseChoice === 'MIT') {
    licenseLink = '(https://opensource.org/licenses/MIT)'
  }
  else if (licenseChoice === 'Apache License 2.0') {
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)'
  }
  else if (licenseChoice === 'ISC License') {
    licenseLink = '(https://opensource.org/licenses/ISC)'
  }
  else if (licenseChoice === 'BSD 3-Clause License') {
    licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)'
  }
  else {
    license = ''
  }
  return licenseLink

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license.length === )



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
   ${data.description}

  ##Table of Contents
   ${data.tableOfContents}

  ##Installation
   ${data.installation}

  ##Usage 
   ${data.usage}

  ##License
   ${data.license}

  ##Contributing
   ${data.contributing}

  ##Tests
   ${data.tests}

  ##Questions
   - [GitHub](${data.github})
   - [Email](${data.email})

`;
}

export default generateMarkdown;
