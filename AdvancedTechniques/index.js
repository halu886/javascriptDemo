function Person(name, age, job) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job)
    }
}
var person = Person("halu", 21, "Software Engineer")

// console.log(window.name);
// console.log(person.name)
// console.log(window.age);
// console.log(window.job);

function Polygon(sides) {
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function () {
            return 0;
        }
    } else {
        return new Polygon(sides);
    }
}

function Rectangle(width, height) {
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
}

Rectangle.prototype = new Polygon();

var rect = new Rectangle(5, 10);
console.log(rect.sides);