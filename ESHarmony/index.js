var Stack = (function () {
    var stack = [],
        allowed = ["push", "pop", "length"];
    return Proxy.create({
        get: function (receiver, name) {
            if (allowed.indexOf(name) > -1) {
                if (typeof stack[name] == "function") {
                    return stack[name].bind(stack);
                } else {
                    return stack[name];
                }
            } else {
                return undefined;
            }
        }
    })
})

var mystack = new Stack();
mystack.push("hi");
mystack.push("goodbye");
console.log(mystack.length);
console.log(mystack[0]);
console.log(mystack.pop());