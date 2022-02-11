

const express   = require("express");
const { Professional } = require("./IMDB/clases/professional.js");
const app       = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

let profesional = new Professional("Charlize Theron", 46, "Femenino", 58, 177, "Rubio", "Azul", "Caucásica", false, "Sudafricana", 1, "Actriz");
//let profesional = null;

app.use(function(request, response, next)
{
    console.log("IBDM operativo")
    next();
});


app.get("/professional",
    function (request, response, next)
    {
        console.log("Profesional mostrado al cliente")
       next();
    },
    function (request,response)
   {
       response.send(profesional)
    })

    //no me crea el profesional no se porque.

app.post("/createProfessional",
function (request, response)
{
    let respuesta;
    if(profesional === null)
    {
         profesional ={name: request.body.name1,
                      age: request.body.age1,
                      genre: request.body.genre1,
                      weight: request.body.weight1,
                      height: request.body.height1,
                      hairColor: request.body.hairColor1,
                      eyeColor: request.body.eyeColor1,
                      race: request.body.race1,
                      isRetired: request.body.isRetired1,
                      nationality: request.body.nationality1,
                      oscarsNumber: request.body.oscarsNumber1,
                      profession: request.body.profession1}
                      console.log("creando profesional por parte del cliente...")
        respuesta={ mensaje: "actor creado correctamente con los siguientes datos: ",  resultado : profesional};
        response.send(respuesta);
    }
    else
    {
        respuesta = {mensaje: "el actor ya existe"};
        response.send(respuesta);

    }
});
    
    app.put("/modifyProfessional",
            function(request, response)
            {
                let respuesta
                if (profesional != null)
                {
                      profesional.name = request.body.name1;
                      profesional.age = request.body.age1;
                      profesional.genre = request.body.genre1;
                      profesional.weight = request.body.weight1;
                      profesional.height = request.body.height1;
                      profesional.hairColor = request.body.hairColor1;
                      profesional.eyeColor = request.body.eyeColor1;
                      profesional.race = request.body.race1;
                      profesional.isRetired = request.body.isRetired1;
                      profesional.nationality = request.body.nationality1;
                      profesional.oscarsNumber = request.body.oscarsNumber1;
                      profesional.profession = request.body.profession1;
                      console.log("editando profesional por parte del cliente...")
        respuesta={ mensaje: "actor editado correctamente con los siguientes datos: ",  resultado : profesional};
        response.send(respuesta);
                }
                else
                {
                    respuesta = {mensaje: "No existe ningun actor"};
                    response.send(respuesta);
                }
            })

    app.delete("/deleteProfessional",
    function(request,response)
    {
        let respuesta
        if (profesional != null)
        {
            profesional     =null;
            respuesta       ={mensaje: "profesional borrado",resultado: profesional};
            response.send(respuesta);
        }
        else
        {
            respuesta ={mensaje:"el profesional no existe",resultado:profesional};
            response.send(respuesta);
        }

    });




    app.listen(4000)
