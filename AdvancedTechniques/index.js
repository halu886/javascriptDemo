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

console.log(window.name);
console.log(person.name)
// console.log(window.age);
// console.log(window.job);