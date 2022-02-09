var fs = require('fs');

  //reto 3
  

  const readline = require('readline');
let Jason ={}
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('edad del jason ', (age) => {
    rl.question('apellido del jason ', (surname) => {
      rl.question('nombre del jason ', (name) => {
      Jason.age=age;
      Jason.surname=surname;
      Jason.name=name;
      let data= JSON.stringify(Jason);
      rl.close();
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
      });});})
