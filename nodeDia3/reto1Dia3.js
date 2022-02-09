const http =require("http");


const server =http.createServer(function(request,response)
    {
        let respuesta;
        let status;
        
        console.log("Petición recibida del cliente.");
        console.log("Header Request: " + request.headers.host)
        console.log("Request Method: " +request.method)
        console.log("Request URL:" + request.url)
        console.log("Response Status code: " + response.statusCode)
        console.log("content-type: " + request.headers['content-Type']) 
        console.log("request-headers: "+ request.headers["Content-Length"])
        console.log("user-agent: "+ request.headers["User-Agent"])

        if(request.url== "/bye"){
            status=200;
            respuesta={ ok: true, message: "Adios!" };
            
        }
        else if(request.url=="/"){
            status =200;
            respuesta ={ ok: true, message: "Recibido!" };
            
        }
        else{
            status=404;
            respuesta ={ ok: false, message: "pagina no encontrada" };


        }
        
        
        response.writeHead(status,{"content-Type":"aplication/json"});
        response.write(JSON.stringify(respuesta));

        
        response.end();
     });

server.listen(3000);