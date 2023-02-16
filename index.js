// Using "require" to fetch package

const inquirer = require('inquirer');
const fs = require('fs');

// Using Inquirer for User Prompts...

inquirer.prompt(
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
            type: 'imput',
            message: 'What is the title of your Project?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
        },
        {
            type: 'imput',
            message: 'What is the title of your Project?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
        },
        {
            type: 'imput',
            message: 'What is the title of your Project?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'I need you to enter a value...'}},
        },
    ]
)