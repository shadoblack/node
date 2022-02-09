var fs = require('fs');

function escribirYLeer(data){fs.writeFile("jason.json", data,(err) => {  //FICHERO JSON EN ESCRIBIR FICHERO
    if (err) {
        throw err;
    }
    console.log("el archivo se ha guardado correctamente.");
    {fs.readFile("jason.json", 'utf8' , (err, data) => { //ponerla como callback de escribir
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })}

});
};




  module.exports = { escribirYLeer}
