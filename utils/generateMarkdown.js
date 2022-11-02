//function to generate the readme file.
function generateMarkdown(data) {
//function that renders license badge
function renderLicenseBadge(license) {
  let licenseChoice = data.license
  let licenseBadge = ''
  if (licenseChoice === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  else if (licenseChoice === 'Apache License 2.0') {
    licenseBadge = '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }
  else if (licenseChoice === 'ISC License') {
    licenseBadge = '[![License:ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  }
  else if (licenseChoice === 'BSD 3-Clause License') {
    licenseBadge = '[![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  }
  else {
    license = ''
  }
  return licenseBadge
};
//function that renders license link
function renderLicenseLink(license) {
  let licenseChoice = data.license 
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

//function that renders license section with link and badge
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license !== '') {
    licenseSection += 
    renderLicenseBadge() + renderLicenseLink()
  } else {
    license = ''
  }
  return licenseSection
  
};
// markdown content layout to be generated
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License

  ${renderLicenseSection()}


  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions
   - [GitHub:${data.github}](https://github.com/${data.github})
   - [Email](${data.email})

`;
}
//exports above content to write a new readme file
export default generateMarkdown;
