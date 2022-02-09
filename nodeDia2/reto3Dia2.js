var fs = require('fs/promises');
const readline= require("readline");

function pregunta(pregunta) {

    const question = new Promise((resolve,reject)=>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta)=>
        {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

let Jason ={};
 
async function escrituraLectura(){

    await fs.writeFile("jason.json", JSON.stringify(Jason))
    .then( () => {
        return fs.readFile("jason.json", "utf8")
    })
    .then( data => {
        console.log(JSON.parse(data));
    })
    .catch(err => {
        console.log(err);
    })
}



escrituraLectura();