const inquirer = require('inquirer');
const fs = require('fs');
const {circle, triangle , square} = require("lib\shapes.js");

inquirer
.promp([
    {
        type: "input",
        message: "What text would you like to put in your logo?",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like your text to be?",
        name: "textColor",
    },
    {
        type: "list",
        message: "Please select the shape you would like your logo to be",
        name: "shape,",
    },
    {
        type: "input",
        message: "What color would you like your logo background to be? (color keyword or hexadecimal number)",
        name: "shapeColor",
    },
])




.then((data) => {
    fs.writeFile("examples\logo.svg", shapeGenerator(data), (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
)});