var btn = document.getElementById("my-btn");
btn.onclick = function () {
    setTimeout(function (diff) {
        console.log(diff)
        document.getElementById("message").style.visibility = "visible"
    }, 251)
}

setTimeout(function () {
    var div = document.getElementById("myDiv");
    left = parseInt(div.style.left) + 5;
    div.style.left = left + "px";

    if (left < 200) {
        setTimeout(arguments.callee, 50);
    }
}, 50)