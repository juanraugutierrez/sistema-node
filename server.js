var http= require("http");
const { request } = require("node:http");
var i=0;

function iniciar() {
    function onRequest(request,response){
        console.log("peticion recibida.");
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("hola Mundo");
        response.write(request,response);
        response.end();
    }
    http.createServer(onRequest).listen(8081);
    console.log("Servidor Iniciado");
    i=i+1;
    console.log(i);
    console.log(request);
}

// http.createServer(function(request, response){
//     response.writeHead(200,{"Content-Type": "text/html"});
//     response.write("hola Mundo");
//     response.end();
// }).listen(8081);
exports.iniciar=iniciar;