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

// var jsonText = JSON.stringify(book, null, "--------------")
// console.log(jsonText)

// console.log((new Date()).toISOString(), (new Date()).toJSON())

var book = {
    title: "Professional JavaScript",
    "authors": [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011,
    // toJSON: function () {
    //     return this.title;
    // }
    releaseDate: new Date(2011, 11, 1)
}

var jsonText = JSON.stringify(book)
// console.log(jsonText)

var bookCopy = JSON.parse(jsonText, function (key, value) {
    if (key == "releaseDate") {
        return new Date(value);
    } else {
        return value
    }
})

console.log(jsonText, bookCopy, bookCopy.releaseDate.getFullYear())