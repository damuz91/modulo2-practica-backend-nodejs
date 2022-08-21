var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Esta es una sumadora. Envía por POST los 2 parámetros a sumar');
})

app.post('/', function(req, res) {
   console.log("Recibí una solicitud de suma")
   console.log("Los parámetros son: " + req.body.num1 + " y " + req.body.num2)
   var a = parseInt(req.body.num1);
   var b = parseInt(req.body.num2);
   var c = a + b;
   res.send(c.toString());
});

var server = app.listen(8081, function () {
   var host = "localhost"
   var port = server.address().port
   
   console.log("Sumadora lista y escuchando por: http://%s:%s", host, port)
})