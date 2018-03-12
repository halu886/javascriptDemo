var request, database;
request = indexedDB.open("admin");
request.onerror = function (event) {
    console.log("error");
}
request.onsuccess = function (event) {
    console.log("success");
    database = event.target.result;
}