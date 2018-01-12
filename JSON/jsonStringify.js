var book = {
    "title": "Professional Javascript",
    "authors": ["Nicholas C. Zakas"],
    "edition": 3,
    "year": 2011
}

// var jsonText = JSON.stringify(book, ["title", 'edition'])

// var jsonText = JSON.stringify(book, function (key, value) {
//     switch (key) {
//         case "authors":
//             return value.join(",");
//         case "year":
//             return 5000;
//         case "edition":
//             return undefined;
//         default:
//             return value
//     }
// })

// var jsonText = JSON.stringify(book, null, 4)

var jsonText = JSON.stringify(book, null, "--------------")
console.log(jsonText)