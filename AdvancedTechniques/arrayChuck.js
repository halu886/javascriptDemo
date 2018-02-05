var data = [12, 123, 1234, 453, 436, 23, 23, 5, 4123, 45, 346, 5634, 2234, 345, 343];
function printValue (item) {
    var div = document.getElementById("myDiv");
    div.innerHTML += item + "<br>";
}

// chunk(data.concat(), printValue)
function chunk (array, process, context) {
    setTimeout(function () {
        var item = array.shift();
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100)
}

function resizeDiv () {
    var div = document.getElementById("myDiv");
    div.style.height = div.offsetHeight + "px";
}

window.onresize = function () {
    throttle(resizeDiv);
}

function throttle (method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }, 100)
}