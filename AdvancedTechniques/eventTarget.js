function EventTarget () {
    this.handlers = {};
}

EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function (type, handlers) {
        if (typeof this.handlers[type] == "undefined") {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handlers);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },
    removeHandler: function (type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
}


// function handleMessage (event) {
//     alert("Message reveived: " + event.message);
// }

// var target = new EventTarget();
// target.addHandler("message", handleMessage);
// target.fire({ type: "message", message: "Hello world!" });
// target.removeHandler("message", handleMessage);
// target.fire({ type: "message", message: "Hello world!" });

function Person (name, age) {
    EventTarget.call(this);
    this.name = name;
    this.age = age;
}

function object (o) {
    function F () { }
    F.prototype = o;
    return new F();
}

function inheritPrototype (subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

inheritPrototype(Person, EventTarget);
Person.prototype.say = function (message) {
    this.fire({ type: "message", message: message });
}

function handleMessage (event) {
    alert(event.target.name + "says: " + event.message);
}

var person = new Person("halu", 29);

person.addHandler("message", handleMessage);
person.say("Hi there");