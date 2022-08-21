var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Esta es una sumadora. Envía por POST los 2 parámetros a sumar');
})

app.post('/', function(req, res) {
   console.log("Recibí una solicitud de suma")
   console.log("Los parámetros son: " + req.params)
   console.log("Los parámetros son: " + req.params.num1 + " y " + req.params.num2)
   var a = parseInt(req.params.num1);
   var b = parseInt(req.params.num2);
   var c = a + b;
   res.send(c.toString());
});

var server = app.listen(process.env.PORT || 8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})