var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('ok');
        }, time);
    })
}

var start = async function () {
    //在这里试用就像同步代码那样直观
    console.log('start');
    let result = await sleep(3000);
    console.log(result);
    console.log('end');
}

start();