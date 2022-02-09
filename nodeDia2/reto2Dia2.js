var fs = require('fs/promises');

//reto2

let Jason={
    "name": "Jason",
    "surname": "Javascripter",
    "age": 24,
}   

fs.writeFile("jason.json", JSON.stringify(Jason))
.then( () => {
    return fs.readFile("jason.json", "utf8")
})
.then( data => {
    console.log(JSON.parse(data));
})
.catch(err => {
    console.log(err);
})