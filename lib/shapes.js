//Class that makes the default shapes and add color to them later.
class Shape {
    constructor() {
        this.color = 'blue'
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" height="200" width="300" fill="${this.color}" />`
    }
}

class Rectangle extends Shape {
    render() {
        return `<rect width="100%" height="100%" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// exporting in order to import in another file
module.exports = { Circle, Rectangle, Triangle }