 //const fs = require('fs');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generate");

var response = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input ',
        message: 'Give a brief description of your project.(What was your motivation?)',
        name: 'description',
    },
    {
        type: 'confirm',
        message: 'Do you want a table of contents',
        name: "username",
    },
    {
        type: 'password',
        message: 'What is your password?',
        name: 'password',
    },
    {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'confirm',
    },
    {
        type: 'input',
        message: 'what are your installation instructions',
        name: 'Installations'
    },
    {
        type: 'input',
        message: 'What is your usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'what are the guidelines',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'what are the test instructions',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'enter you github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'what is your email adress?',
        name: 'emailadress',
    },
]
inquirer.prompt(response).then(function (answers) {
// console.log(answers)
    fs.writeFile("ReadMe.md", generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    }); 
});

// const js = require('')
//  fs.appendFile(__dirname) + ('log.text', `${process.argv[2]}\n`, (err) =>
//  err ? console.error(err) : console.log('ReadMe coming up!')
//  );



// //how to export objects or variable use
// module.exports= {
//     name: "john doe"};
//then you have to import it on javascript file when i create it using requre
//const badmath = require (`./badmath.js`);
//console.log(badmath);
//type in index.js