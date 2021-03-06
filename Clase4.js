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
xhr.open('GET','archivo.json');

//RS 2,3,4 - Enviar y recibir headers, descargar y terminar
xhr.send();

/*EVENTOS DE XHR
readyStateChange: se dispara cuando readystate cambia

*/
xhr.addEventListener('readystatechange',()=>
{
    if(xhr.readyState == 4){
      let div = document.createElement('div');
      div.innerText = xhr.response;
      document.body.appendChild(div);
    };
});