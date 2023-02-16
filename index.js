const inquirer = require('inquirer');
const fs = require('fs');

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