// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mit =
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const gpl3 =
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const odcBy =
    "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
    let badge;
    if (answers.license === "MIT") {
      badge = mit;
    } else if (answers.license === "GPL v3") {
      badge = gpl3;
    } else if (answers.license === "ODC BY") {
      badge = odcBy;
    }
    else {
      badge = "";
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mit =
    "https://opensource.org/licenses/MIT";
  const gpl3 =
    "https://www.gnu.org/licenses/gpl-3.0";
  const odcBy =
    "https://opendatacommons.org/licenses/by";
    let link;
    if (answers.license === "MIT") {
      link = mit;
    } else if (answers.license === "GPL v3") {
      link = gpl3;
    } else if (answers.license === "ODC BY") {
      link = odcBy;
    }
    else {
      link = "";
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (link) {
  return `## License
  This app's license is ${renderLicenseBadge(license)}. Please visit ${renderLicenseLink(license)} for more information.`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
