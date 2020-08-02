//require all 'class' files 
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const inquirer = require("inquirer");
const fs = require("fs");

//Empty team members array
const teamMembers = [];

//Manager questions
const teamManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's name");
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's employee id? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's employee id");
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's email address");
                }
            }
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the team manager's office number? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter team manager's office number");
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        console.log(teamMembers)
    })
};


teamManager();

//Other team member questions - Engineer & Intern
