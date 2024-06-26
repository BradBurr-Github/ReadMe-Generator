// Function to render the license badge
function renderLicenseBadge(license) {
  // Get license link
  const licenseLink = renderLicenseLink(license);
  // return license badge
  if( license === global.optionMIT )
    return `[![License: MIT](${licenseLink})](https://opensource.org/licenses/MIT)`;
  else if( license === global.optionAPACHE ) {
    return `[![License](${licenseLink})](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if( license === global.optionGPL ) {
    return `[![License: GPL v3](${licenseLink})](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if( license === global.optionBSD ) {
    return `[![License](${licenseLink})](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else {
    return '';
  }
}

// Function to render the license link
function renderLicenseLink(license) {
  // return license link
  if( license === global.optionMIT )
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  else if( license === global.optionAPACHE ) {
    return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  }
  else if( license === global.optionGPL ) {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  }
  else if( license === global.optionBSD ) {
    return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
  }
  else {
    return '';
  }
}

// Function to render the license text
function renderLicenseText(license) {
  // return license text
  let licenseText = 'This project is licensed under the ';
  if( license === global.optionMIT )
    licenseText += 'MIT license.';
  else if( license === global.optionAPACHE ) {
    licenseText += 'Apache 2.0 license.';
  }
  else if( license === global.optionGPL ) {
    licenseText += 'GNU GPL v3 license.';
  }
  else if( license === global.optionBSD ) {
    licenseText += 'BSD 3-Clause license.';
  }
  else {
    licenseText = 'This project is not currently licensed.';
  }
  return licenseText;
}

// Function to render the license section
function renderLicenseSection(license) {
  // return license section
  const licenseText = renderLicenseText(license);
  return `## License\r\n${licenseText}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Create Markdown content and return it
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const emailAddressLink = `<a href=mailto:${data.emailAddress}>${data.emailAddress}</a>`;
  const githubLink = `<a href="https://github.com/${data.githubName}" target="_blank">${data.githubName}</a>`;
  // Markdown content
  return  `# ${data.projectName}\r\n` +
          `${licenseBadge}\r\n` + 
          `## Description\r\n` +
          `${data.projectDesc}\r\n` +
          `## Table of Contents\r\n` +
          `1. [Installation](#installation)\r\n` +
          `2. [Usage](#usage)\r\n` +
          `3. [License](#license)\r\n` +
          `4. [Contributing](#contributing)\r\n` +
          `5. [Tests](#tests)\r\n` +
          `6. [Questions](#questions)\r\n` +
          `7. [Acknowledgements](#acknowledgements)\r\n` +
          `<a id="installation"></a>\r\n` +
          `## Installation\r\n` +
          `${data.install}\r\n` +
          `<a id="usage"></a>\r\n` +
          `## Usage\r\n` +
          `${data.repo}\r\n` +
          `<a id="license"></a>\r\n` +
          `${licenseSection}\r\n` +
          `<a id="contributing"></a>\r\n` +
          `## Contributing\r\n` +
          `${data.contribute}\r\n` +
          `<a id="tests"></a>\r\n` +
          `## Tests\r\n` +
          `${data.tests}\r\n` +
          `<a id="questions"></a>\r\n` +
          `## Questions\r\n` +
          `If you have any questions about this Project or its Repository, I can be reached at ${emailAddressLink}.  ` +
          `You can also find more of my work at ${githubLink}.\r\n` +
          `<a id="acknowledgements"></a>\r\n` +
          `## Acknowledgements\r\n` +
          `None at this time.`;
}

module.exports = generateMarkdown;
