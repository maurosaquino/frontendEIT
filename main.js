const perfil = document.querySelector('#perfil');
const productos = document.querySelector('#productos');
const formulario = document.querySelector('#enviar');
const main = document.querySelector('main');
const imagen = document.querySelector('#archivo');
const caja = document.querySelector('#box');
const imagendd = document.querySelector('#imagendd');


function subirImagen(imagen){
    
    const formdata = new FormData();
    formdata.append('foto-perfil',imagen,'perfil.jpg');

    xhr2 = new XMLHttpRequest();
    xhr2.addEventListener('load',e=>{
        if(xhr2.status===200){
           console.log(xhr2.response);
        }
    });

    xhr2.open('post','upload.php');
    xhr2.send(formdata);

}

//https://developer.mozilla.org/es/docs/DragDrop/Drag_and_Drop

function llamada(archivo) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',e=>{
        if (xhr.status===200){
            main.innerHTML = xhr.response;
            history.pushState({html:xhr.response},archivo,archivo);
            
        }
    })
    xhr.open('get',archivo+'.html');
    xhr.send();
}

window.addEventListener('popstate',e=>{
    main.innerHTML = e.state.html;
});

perfil.addEventListener('click',e=>{
    llamada('perfil');
});

productos.addEventListener('click',e=>{
    llamada('productos');
});

formulario.addEventListener('click',e=>{
    subirImagen(imagen.files[0]);
});

imagendd.addEventListener('dragstart',e=>{
    console.log(e);
})

caja.addEventListener('dragover',e=>{
    document.getElementById('box').style.backgroundColor='blue';
});

caja.addEventListener('dragleave',e=>{
    document.getElementById('box').style.backgroundColor='red';
});


