/*
AJAX: Asyncronus Javascript and XML
XMLHttpRequest(XHR) = Web API

//STACK              //WEB API
console.log()        asincronico()
                      |
                      |
//QUEUE               | 
asincronico()  <------|

Header: Metadata del pedido HTTP
CORS: Cross Origin Resource Sharing, si se hace un pedido HTTP minimo hay que estar en HTTP 
PROTOCOLO: FTP, FILE, HTTP, HTTPS

ReadyState es el estado del pedido

Codigos de respuesta

200 OK
302 Found
304 No modificado 

401 = 403 No autorizado
404 No se encontro
408 Timeout
500 Error del servidor (puede ser cualquier cosa)


*/

//RS 0 - Inicializar
let xhr = new XMLHttpRequest();

//RS 1 - Configurar (METODO[GET,POST,PUT,PATCH,DELETE], URL, TIPO DE PEDIDO [BOOLEANO])
xhr.open('GET','texto.txt');

//RS 2 - Enviar y recibir headers
xhr.send();