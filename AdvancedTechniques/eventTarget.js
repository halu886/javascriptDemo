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
        if (ths.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },
    removeHandler: function (type, handlers) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handlers) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
}


function handleMessage (event) {
    alert("Message reveived: " + event.message);
}

var target = new EventTarget();
target.addEventListener("message", handleMessage);
target.fire({ type: "message", message: "Hello world!" });
target.removeEventListener({ "message": handleMessage });
target.fire({ type: "message", message: "Hello world!" });