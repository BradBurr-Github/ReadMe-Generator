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
  const licenseText = 'This project is licensed under the ';
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
  return `## License<br/>${licenseText}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return 'test';

  // const licenseBadge = renderLicenseBadge(data.license);
  // const licenseSection = renderLicenseSection(data.license);
  

  // return `# README File Generator

  // README File Generator: An application that creates a Professional README.md file.

  // ## Description

  // This application asks the user specific questions on the command line and then builds a Professional README.md file from the answers given.

  // ## Image of My Website

  // <img src="./assets/images/webpage.png" alt="SkyCast webpage image"/>
 
  // ## Visit My Website
 
  // [My Website](https://bradburr-github.github.io/Sky-Cast/)
  
  // ${licenseBadge}
  // `;
}

module.exports = generateMarkdown;
