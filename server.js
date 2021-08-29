var http= require("http");


function iniciar() {
    function onRequest(request,response){
        console.log("peticion recibida.");
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("hola Mundo");
        response.end();
    }

    http.createServer(onRequest).listen(8081);
    console.log("servidor iniciado");
};
exports.iniciar=iniciar;
// http.createServer(function(request, response){
//     response.writeHead(200,{"Content-Type": "text/html"});
//     response.write("hola Mundo");
//     response.end();
// }).listen(8081);
exports.iniciar=iniciar;