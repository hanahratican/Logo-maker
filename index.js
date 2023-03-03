const {Circle, Triangle, Square} = require('./lib/shapes')
const SVG = require('./lib/svg')
const inquirer = require('inquirer')
const fs = require('fs');

inquirer.prompt([ 
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want for your logo?',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What 3 letters will be used in your logo?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color will your text be?',
    },
    {
        type: 'input',
        name: 'shapeColor', 
        message: 'What color will your shape be?',
    },
])
.then ((response) => {
    console.log(response);
    let shape;
    if(response.shape === 'circle'){
        shape = new Circle();
    };
    if(response.shape === 'square'){
        shape = new Square();
    };
    if(response.shape === 'triangle'){
        shape = new Triangle();
    };
    shape.setColor(response.shapeColor)
    const svg = new SVG()
    svg.setText(response.text, response.textColor)
    svg.setShape(shape)
    fs.writeFileSync('logo.svg', svg.render())
}) 