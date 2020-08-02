//require all 'class' files 
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require('./src/generate-html-page');

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
               createTeam(); 
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

//Intern questions
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of your Intern? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Intern's name")
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is your Interns's employee id? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Intern's employee id")
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's email address? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Intern's email address")
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is your Intern's school? (Required)",
            validate: (nameInput) => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please provide your Intern's school")
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        console.log(teamMembers);
        buildTeam();
    });
}

// Function to write HTML File
//.dist/team/html write over existing html
function createTeam(fileName, data) {
    fs.writeFile('./dist/test.html', data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("HTML successful");
        }
    });
};

teamManager();

// //Function to initialize 
// function init() {
//     teamManager().then(answers=> writeFile("team.html", generateTeam(answers)));
// }

// init();


