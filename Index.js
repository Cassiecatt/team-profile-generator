// //require all 'class' files 
// const Employees = require('./lib/Employees')
// const Intern = require('./lib/Intern')
// const Engineer = require('./lib/Engineer')
// const Manager = require('./lib/Manager')
// const inquirer = require("inquirer");
// const fs = require("fs");

// //Empty team members array
// const teamMembers = [];

// //Manager questions
// const teamManager = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "manager name",
//             message: "What is the team manager's name? (Required)",
//             validate: (nameInput) => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter team manager's name");
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "manager id",
//             message: "What is the team manager's employee id? (Required)",
//             validate: (nameInput) => {
//                 if(nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter team manager's employee id");
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "manager email",
//             message: "What is the team manager's email address? (Required)",
//             validate: (nameInput) => {
//                 if(nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter team manager's email address");
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "manager office",
//             message: "What is the team manager's office number? (Required)",
//             validate: (nameInput) => {
//                 if(nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter team manager's office number");
//                 }
//             }
//         }
//     ])
// };

// teamManager();