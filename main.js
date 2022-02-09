var fs = require('fs');


//reto 1

console.log("Mensaje 1");
setTimeout(function (){
    console.log("mensaje 2");
    console.log("mensaje 3");
},3000);

//reto 2

let Jason={
    "name": "Jason",
    "surname": "Javascripter",
    "age": 24,
}   

let data= JSON.stringify(Jason);

fs.writeFile('jason.json', data,(err) => {
    if (err) {
        throw err;
    }
    console.log("el Json se ha guardado correctamente");
    fs.readFile('jason.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
      })
});





  