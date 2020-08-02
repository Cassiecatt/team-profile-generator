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
            message: "What is the Team Manager's name? (Required)",
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
            message: "What is the Team Manager's employee id? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's employee id");
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Team Manager's email address? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's email address");
                }
            }
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the Team Manager's office number? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's office number");
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        console.log(teamMembers)
        //call buildTeam() here
        buildTeam();
        
    })
};

//Other team member questions - Engineer & Intern
function buildTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamChoice",
            message: "Select the team member you'd like to add",
            choices: ["Engineer", "Intern", "None"]
        }
    ]).then(inputChoice => {
        switch(inputChoice.teamChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
               createTeam(); // need to create
        }
    });
}

//Engineer questions
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your Engineer? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Engineer's name")
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your Engineer's employee id? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Engineer's employee id")
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Engineer's email address? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Engineer's email address")
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your Engineer's Github username? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Engineer's Github username")
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        console.log(teamMembers);
        buildTeam();
    });
}



teamManager();