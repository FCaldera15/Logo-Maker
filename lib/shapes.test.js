// Importing Classes
const { Circle, Rectangle, Triangle } = require('./shapes.js')

// Test for Circle
test('Should set shape color to green if we set it to green', () => {
    let shape = new Circle()
    shape.setColor("red")
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" height="200" width="300" fill="red" />')

});

test('If we do not pass a value for shape color, then use blue as the default color', () => {
    let shape = new Circle()
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" height="200" width="300" fill="blue" />')

});

// Test for Rectangle
test('Should set shape color to green if we set it to green', () => {
    let shape = new Rectangle()
    shape.setColor("green")
    expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="green" />')

});

test('If we do not pass a value for shape color, then use blue as the default color', () => {
    let shape = new Rectangle()
    expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="blue" />')

});

// Test for Triangle
test('Should set shape color to green if we set it to green', () => {
    let shape = new Triangle()
    shape.setColor("green")
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />')

});

test('If we do not pass a value for shape color, then use blue as the default color', () => {
    let shape = new Triangle()
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')

});