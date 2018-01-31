var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function (event) {
        if (document.implementation.hasFeature('MouseEvents', "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ?
                -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
};

var handler = {
    message: "Event handled",
    handleClick: function (name, event) {
        console.log(this.message + ":" + name + ":" + event.type)
    }
}


var btn = document.getElementById("my-btn");


// EventUtil.addHandler(btn, "click", function (event) { handler.handleClick(event) });

// function bind(fn, context) {
//     return function () {
//         return fn.apply(context, arguments);
//     }
// }

// EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
// EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler))

function add(num1, num2) {
    return num1 + num2;
}

// function curriedAdd(num2) {
//     return add(5, num2);
// }

function bind(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    }
}

var curriedAdd = bind(add, 5);
console.log(curriedAdd(3));

// EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler, "my-btn"))
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler, "my-btn"))