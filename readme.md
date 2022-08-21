# Módulo 2: Práctica backend y frontned

El repositorio del frontend: https://github.com/damuz91/modulo2-practica-frontend-backend

El proyecto contiene una pequeña app de NodeJS y Express en donde tiene 2 endpoints, uno por GET y otro por POST, ambos en la ruta principal `/`. La petición por POST recibe 2 parámetros en el body: `num1` y `num2`. El servidor deberá responder con la suma de ambos números. El servidor no controla ninguna excepción, esto para ejemplificar como es el manejo remoto de una lógica que no depende de nosotros.

Para efectos prácticos la he montado en el servicio Heroku, en donde se pueden alojar pequeños servidores de manera gratuita. Es posible montar este servidor de manera local si es que se tiene Nodejs instalado y NPM. En cuyo caso bastaría con correr los siguientes comandos:
- `npm install` (Estando en la carpeta backend)
- `node server.js` -> Inicia el servidor en `localhost:8081` 

La URL de heroku está parametrizada en el archivo `index.js` del frontend que si requiere backend.

Si se corre el servidor de manera local entonces hay que cambiar esa URL para que corresponda a `localhost:8081`.

xoxo