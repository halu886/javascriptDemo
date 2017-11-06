(function(){
    var name = "test";

    Person = function(value){
        name = this.value;
    }

    Person.prototype.setName = function(value){
        name = value;
    }

    Person.prototype.getName = function(){
        return name;
    }
    return Person;
})();

var person = new Person('stetr');

console.log(person.getName());

person.setName('halu');

console.log(person.getName());