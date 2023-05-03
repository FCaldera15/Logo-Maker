//Default Svg class that the user will input and create a new Svg
class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${this.shapeElement}

        ${this.textElement}

        </svg>`
    }
    setTextElement(text, textColor) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()

    }

}

module.exports = Svg;