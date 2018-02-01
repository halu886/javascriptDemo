var btn = document.getElementById("my-btn");
btn.onclick = function () {
    setTimeout(function (diff) {
        console.log(diff)
        document.getElementById("message").style.visibility = "visible"
    }, 251)
}