// Using "require" to fetch package

const inquirer = require('inquirer');
const fs = require('fs');

// Using function, and inquirer to display user questions in nodejs

const questions = () => {
    return inquirer
    .prompt(
        [
            {
                type: 'imput',
                message: 'What is the title of your Project?',
                name: 'title',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'Please provide a description of you Project:',
                name: 'description',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'Please provide a detailed description of how to install your Project:',
                name: 'install',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'Please provide directions, or an example on use:',
                name: 'usage',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'List all contributions to this Project:',
                name: 'credits',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'Please write any tests for your Project:',
                name: 'test',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'list',
                message: 'Please select a license from the list:',
                choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPv3', 'Mozilla Public License 1.0',
                'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
                name: 'license',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'Please enter you Github username:',
                name: 'username',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
            {
                type: 'imput',
                message: 'Please enter you email address:',
                name: 'email',
                validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
            },
        ]
    )
}

// Creating the Badge Licenses

const badgeLicense = (response) =>{

    let badge;

    if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    else if (response.license == 'GNU AGPLv3'){
        badge = '[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/lecence/agpl-3.0)';
    }
    return badge;
};

// Function creating readme file using template literal

const createReadMe = (response) => `
# ${response.title}
${badgeLicense(response)}
## Description
${response.description}
## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Contributing](#contributing)
-[Tests](#tests)
-[License](#license)
-[Questions](#questions)
## Installation
${response.install}
## Contributing
${response.credits}
## Tests
${response.test}
## License
This project is using the ${response.license} license. For more information please visit [Here](https://choosealicense/).
## Questions?
please reach out if you have any questions, and or
concerns.
I can be reached @
Github: [${response.username}](https://github.com/${response.username})
Email: <${response.email}>
`;

// Runs questions, and takes user response to create a READme file

function init() {
    questions()
    .then((response) => fs.writeFile('readme.md', createReadMe(response), (err) => 
    err ? console.error(err) : console.log('readme file was successfully created! :)')));
}

init();