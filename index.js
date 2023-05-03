const { Circle, Rectangle, Triangle } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const { writeFile } = require('fs');

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()

    }

}

const textLength = (input) => {
    if (input.length > 4 || input.length === 0) {

        return "Please enter (3) characters or less"
    }
    return true
}

const startPrompt = async () => {

    try {
        const initialPrompt = await inquirer

            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "Enter Text: Must be NO MORE than (3) characters:",
                    validate: textLength,
                },
                {
                    type: "input",
                    name: "textColor",
                    message: "Enter a color for your text:",
                },
                {
                    type: "list",
                    name: "shape",
                    message: ["Circle", "Rectangle", "Triangle"],
                },
                {
                    type: "input",
                    name: "shapeColor",
                    message: "Enter a color for your shape"
                }
            ])

        console.log(text)
        console.log(textColor)
        console.log(shape)
        console.log(shapeColor)


        let shape;
        switch (initialPrompt.shape) {

            case "Circle":
                shape = new Circle()

                break;
            case "Rectangle":
                shape = new Rectangle()

                break;
            case "Triangle":
                shape = new Triangle()

                break;

            default:
                throw Error("Error creating the SVG Shape")
        }

        if (initialPrompt.shapeColor !== "") {
            shape.setColor(initialPrompt.shapeColor)
        }
        let svg = new Svg();
        svg.setTextElement(initialPrompt.text, initialPrompt.textColor);
        svg.setShapeElement(shape);
        svgString = svg.render()
        console.log("logo.svg has been created!");

        writeFile("logo.svg", svg.render(), (err) => {
            if (err)
                console.log(err)
        })

        // catching any errors
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}


function main() {
    startPrompt()
}

main();