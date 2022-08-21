var express = require('express');
const cors = require('cors');
var app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
   res.send('Esta es una sumadora. Envía por POST los 2 parámetros a sumar');
})

app.post('/', function(req, res) {
   console.log("Recibí una solicitud de suma")
   console.log("Los parámetros son: " + req.body)
   console.log("Los parámetros son: " + req.body.num1 + " y " + req.body.num2)
   var a = parseInt(req.body.num1);
   var b = parseInt(req.body.num2);
   var c = a + b;
   res.send(c.toString());
});

var server = app.listen(process.env.PORT || 8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})