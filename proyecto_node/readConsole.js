
  const readline = require('readline');
  let Jason ={}
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    async function preguntas(){
    rl.question('edad del jason ', (age) => {
    rl.question('apellido del jason ', (surname) => {
      rl.question('nombre del jason ', (name) => {
  Jason.age=age;
  Jason.surname=surname;
  Jason.name=name;
    })
      rl.close();
    });
  });
}
    //meter en funcion